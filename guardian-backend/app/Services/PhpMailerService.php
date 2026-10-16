<?php

namespace App\Services;

use App\Models\ClaimNotification;
use App\Models\ContactInquiry;
use App\Models\NewsletterSubscription;
use App\Models\QuoteRequest;
use Illuminate\Support\Facades\Log;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

class PhpMailerService
{
    /**
     * Build an instance of PHPMailer configured from .env
     */
    protected function createMailer(): PHPMailer
    {
        $mail = new PHPMailer(true);

        $mailerDriver = env('MAIL_MAILER', 'smtp');

        if ($mailerDriver === 'smtp') {
            $mail->isSMTP();
            $mail->Host = env('MAIL_HOST', '127.0.0.1');
            $mail->Port = (int) env('MAIL_PORT', 1025);

            $username = env('MAIL_USERNAME');
            $password = env('MAIL_PASSWORD');

            if (!empty($username) && !empty($password)) {
                $mail->SMTPAuth = true;
                $mail->Username = $username;
                $mail->Password = $password;
            } else {
                $mail->SMTPAuth = false;
            }

            $encryption = env('MAIL_ENCRYPTION');
            if ($encryption === 'tls') {
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            } elseif ($encryption === 'ssl') {
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
            } else {
                $mail->SMTPSecure = '';
                $mail->SMTPAutoTLS = false;
            }

            // Local dev certificate bypass if needed
            $mail->SMTPOptions = [
                'ssl' => [
                    'verify_peer' => false,
                    'verify_peer_name' => false,
                    'allow_self_signed' => true,
                ],
            ];
        }

        $mail->CharSet = 'UTF-8';
        $fromEmail = env('MAIL_FROM_ADDRESS', 'no-reply@guardianrebrokers.co.ug');
        $fromName = env('MAIL_FROM_NAME', 'Guardian Reinsurance System');
        $mail->setFrom($fromEmail, $fromName);

        $recipientEmail = env('NOTIFICATION_RECIPIENT_EMAIL', 'info@guardianrebrokers.co.ug');
        $recipientName = env('NOTIFICATION_RECIPIENT_NAME', 'Guardian Reinsurance Desk');
        $mail->addAddress($recipientEmail, $recipientName);

        return $mail;
    }

    /**
     * Send email notification for Contact Inquiry
     */
    public function sendContactNotification(ContactInquiry $inquiry): bool
    {
        try {
            $mail = $this->createMailer();

            if (!empty($inquiry->email)) {
                $mail->addReplyTo($inquiry->email, $inquiry->name);
            }

            $mail->Subject = "[Guardian Re Docket] New Contact Inquiry: {$inquiry->name} ({$inquiry->company})";

            $urgencyBadge = strtoupper($inquiry->urgency ?? 'STANDARD');
            $urgencyColor = $urgencyBadge === 'URGENT' ? '#B91C1C' : ($urgencyBadge === 'PRIORITY' ? '#C2410C' : '#071732');

            $html = "
            <div style='font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; border: 1px solid #E5E0D8; background-color: #FAF8F5;'>
                <div style='background-color: #071732; padding: 25px 30px; border-bottom: 3px solid #1E40AF;'>
                    <h1 style='color: #FFFFFF; margin: 0; font-size: 20px; font-weight: 600; letter-spacing: 0.5px;'>
                        GUARDIAN REINSURANCE BROKERS
                    </h1>
                    <p style='color: #93C5FD; margin: 5px 0 0 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px;'>
                        New Website Contact Inquiry • Kampala Desk
                    </p>
                </div>

                <div style='padding: 30px; background-color: #FFFFFF;'>
                    <div style='display: inline-block; padding: 4px 10px; background-color: {$urgencyColor}; color: #FFFFFF; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 20px;'>
                        Urgency: {$urgencyBadge}
                    </div>

                    <table style='width: 100%; border-collapse: collapse; margin-bottom: 25px; font-size: 13px;'>
                        <tr style='border-bottom: 1px solid #F0ECE4;'>
                            <td style='padding: 10px 0; color: #64748B; width: 35%;'>Submitter Name:</td>
                            <td style='padding: 10px 0; color: #0F172A; font-weight: 600;'>{$inquiry->name}</td>
                        </tr>
                        <tr style='border-bottom: 1px solid #F0ECE4;'>
                            <td style='padding: 10px 0; color: #64748B;'>Company / Cedant:</td>
                            <td style='padding: 10px 0; color: #0F172A; font-weight: 600;'>{$inquiry->company}</td>
                        </tr>
                        <tr style='border-bottom: 1px solid #F0ECE4;'>
                            <td style='padding: 10px 0; color: #64748B;'>Corporate Email:</td>
                            <td style='padding: 10px 0; color: #1E40AF; font-weight: 600;'>
                                <a href='mailto:{$inquiry->email}' style='color: #1E40AF; text-decoration: none;'>{$inquiry->email}</a>
                            </td>
                        </tr>
                        <tr style='border-bottom: 1px solid #F0ECE4;'>
                            <td style='padding: 10px 0; color: #64748B;'>Direct Phone:</td>
                            <td style='padding: 10px 0; color: #0F172A;'>{$inquiry->phone}</td>
                        </tr>
                        <tr style='border-bottom: 1px solid #F0ECE4;'>
                            <td style='padding: 10px 0; color: #64748B;'>Service of Interest:</td>
                            <td style='padding: 10px 0; color: #071732; font-weight: 600;'>{$inquiry->service}</td>
                        </tr>
                        <tr style='border-bottom: 1px solid #F0ECE4;'>
                            <td style='padding: 10px 0; color: #64748B;'>Submission Time:</td>
                            <td style='padding: 10px 0; color: #64748B;'>{$inquiry->created_at}</td>
                        </tr>
                        <tr>
                            <td style='padding: 10px 0; color: #64748B;'>Submitter IP:</td>
                            <td style='padding: 10px 0; color: #64748B; font-family: monospace;'>{$inquiry->ip_address}</td>
                        </tr>
                    </table>

                    <div style='margin-top: 20px;'>
                        <h4 style='color: #071732; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;'>
                            Inquiry Message / Specifications:
                        </h4>
                        <div style='background-color: #FAF8F5; border-left: 4px solid #071732; padding: 15px; font-size: 13px; color: #1E293B; line-height: 1.6; white-space: pre-wrap;'>{$inquiry->message}</div>
                    </div>

                    <div style='margin-top: 30px; text-align: center;'>
                        <a href='mailto:{$inquiry->email}?subject=RE: Guardian Reinsurance Inquiry - {$inquiry->company}' style='background-color: #071732; color: #FFFFFF; padding: 12px 25px; text-decoration: none; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; display: inline-block;'>
                            Reply Directly to {$inquiry->name}
                        </a>
                    </div>
                </div>

                <div style='padding: 20px 30px; background-color: #F4F1EA; font-size: 11px; color: #64748B; text-align: center; border-top: 1px solid #E5E0D8;'>
                    <p style='margin: 0;'>Protected under Insurance Regulatory Authority of Uganda (IRA) non-disclosure governance.</p>
                    <p style='margin: 5px 0 0 0;'>Guardian Reinsurance Brokers • Plot 14/16, Kampala Road, Kampala, Uganda</p>
                </div>
            </div>
            ";

            $mail->isHTML(true);
            $mail->Body = $html;
            $mail->AltBody = "New Contact Inquiry from {$inquiry->name} ({$inquiry->company})\nEmail: {$inquiry->email}\nPhone: {$inquiry->phone}\nService: {$inquiry->service}\nUrgency: {$inquiry->urgency}\n\nMessage:\n{$inquiry->message}";

            $mail->send();
            Log::info("PHPMailer: Contact notification sent for inquiry #{$inquiry->id} to {$mail->getToAddresses()[0][0]}");
            return true;
        } catch (\Throwable $e) {
            Log::error("PHPMailer Error (Contact): " . $e->getMessage());
            return false;
        }
    }

    /**
     * Send email notification for Quote / Terms Request
     */
    public function sendQuoteNotification(QuoteRequest $quote): bool
    {
        try {
            $mail = $this->createMailer();

            if (!empty($quote->email)) {
                $mail->addReplyTo($quote->email, $quote->contact_person);
            }

            $mail->Subject = "[Guardian Re Terms Docket] Broking Quote Request: {$quote->company_name}";

            $html = "
            <div style='font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; border: 1px solid #E5E0D8; background-color: #FAF8F5;'>
                <div style='background-color: #071732; padding: 25px 30px; border-bottom: 3px solid #2563EB;'>
                    <h1 style='color: #FFFFFF; margin: 0; font-size: 20px; font-weight: 600;'>
                        GUARDIAN REINSURANCE BROKERS
                    </h1>
                    <p style='color: #93C5FD; margin: 5px 0 0 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px;'>
                        Reinsurance Terms & Capacity Request Docket
                    </p>
                </div>

                <div style='padding: 30px; background-color: #FFFFFF;'>
                    <table style='width: 100%; border-collapse: collapse; margin-bottom: 25px; font-size: 13px;'>
                        <tr style='border-bottom: 1px solid #F0ECE4;'>
                            <td style='padding: 10px 0; color: #64748B; width: 35%;'>Cedant / Institution:</td>
                            <td style='padding: 10px 0; color: #0F172A; font-weight: 600;'>{$quote->company_name}</td>
                        </tr>
                        <tr style='border-bottom: 1px solid #F0ECE4;'>
                            <td style='padding: 10px 0; color: #64748B;'>Contact Officer:</td>
                            <td style='padding: 10px 0; color: #0F172A; font-weight: 600;'>{$quote->contact_person}</td>
                        </tr>
                        <tr style='border-bottom: 1px solid #F0ECE4;'>
                            <td style='padding: 10px 0; color: #64748B;'>Corporate Email:</td>
                            <td style='padding: 10px 0; color: #1E40AF; font-weight: 600;'>
                                <a href='mailto:{$quote->email}' style='color: #1E40AF; text-decoration: none;'>{$quote->email}</a>
                            </td>
                        </tr>
                        <tr style='border-bottom: 1px solid #F0ECE4;'>
                            <td style='padding: 10px 0; color: #64748B;'>Class of Placement:</td>
                            <td style='padding: 10px 0; color: #071732; font-weight: bold; text-transform: uppercase;'>{$quote->service}</td>
                        </tr>
                        <tr style='border-bottom: 1px solid #F0ECE4;'>
                            <td style='padding: 10px 0; color: #64748B;'>Docket Created:</td>
                            <td style='padding: 10px 0; color: #64748B;'>{$quote->created_at}</td>
                        </tr>
                    </table>

                    <div style='margin-top: 20px;'>
                        <h4 style='color: #071732; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;'>
                            Portfolio Details / Submission Slip Notes:
                        </h4>
                        <div style='background-color: #FAF8F5; border-left: 4px solid #2563EB; padding: 15px; font-size: 13px; color: #1E293B; line-height: 1.6; white-space: pre-wrap;'>{$quote->message}</div>
                    </div>

                    <div style='margin-top: 30px; text-align: center;'>
                        <a href='mailto:{$quote->email}?subject=RE: Reinsurance Broking Terms - {$quote->company_name}' style='background-color: #071732; color: #FFFFFF; padding: 12px 25px; text-decoration: none; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; display: inline-block;'>
                            Respond to {$quote->contact_person}
                        </a>
                    </div>
                </div>

                <div style='padding: 20px 30px; background-color: #F4F1EA; font-size: 11px; color: #64748B; text-align: center; border-top: 1px solid #E5E0D8;'>
                    <p style='margin: 0;'>Automated Fiduciary Notice • Guardian Reinsurance Brokers Uganda</p>
                </div>
            </div>
            ";

            $mail->isHTML(true);
            $mail->Body = $html;
            $mail->AltBody = "New Quote Request from {$quote->contact_person} ({$quote->company_name})\nEmail: {$quote->email}\nService: {$quote->service}\n\nDetails:\n{$quote->message}";

            $mail->send();
            Log::info("PHPMailer: Quote notification sent for quote #{$quote->id}");
            return true;
        } catch (\Throwable $e) {
            Log::error("PHPMailer Error (Quote): " . $e->getMessage());
            return false;
        }
    }

    /**
     * Send email notification for Claim Notice Docket
     */
    public function sendClaimNotification(ClaimNotification $claim): bool
    {
        try {
            $mail = $this->createMailer();

            $mail->Subject = "[CRITICAL CLAIMS NOTICE] Docket #{$claim->id} • {$claim->cedant_name} (Slip: {$claim->slip_number})";

            $html = "
            <div style='font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; border: 1px solid #E5E0D8; background-color: #FAF8F5;'>
                <div style='background-color: #B91C1C; padding: 25px 30px;'>
                    <h1 style='color: #FFFFFF; margin: 0; font-size: 20px; font-weight: 600;'>
                        NOTICE OF LOSS / CLAIMS NOTIFICATION
                    </h1>
                    <p style='color: #FEE2E2; margin: 5px 0 0 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px;'>
                        Immediate Fiduciary Claims Registration Docket
                    </p>
                </div>

                <div style='padding: 30px; background-color: #FFFFFF;'>
                    <table style='width: 100%; border-collapse: collapse; margin-bottom: 25px; font-size: 13px;'>
                        <tr style='border-bottom: 1px solid #F0ECE4;'>
                            <td style='padding: 10px 0; color: #64748B; width: 35%;'>Cedant / Insurer:</td>
                            <td style='padding: 10px 0; color: #0F172A; font-weight: bold;'>{$claim->cedant_name}</td>
                        </tr>
                        <tr style='border-bottom: 1px solid #F0ECE4;'>
                            <td style='padding: 10px 0; color: #64748B;'>Treaty / Slip Number:</td>
                            <td style='padding: 10px 0; color: #0F172A; font-family: monospace; font-weight: bold;'>{$claim->slip_number}</td>
                        </tr>
                        <tr style='border-bottom: 1px solid #F0ECE4;'>
                            <td style='padding: 10px 0; color: #64748B;'>Date of Loss:</td>
                            <td style='padding: 10px 0; color: #B91C1C; font-weight: bold;'>{$claim->date_of_loss}</td>
                        </tr>
                        <tr style='border-bottom: 1px solid #F0ECE4;'>
                            <td style='padding: 10px 0; color: #64748B;'>Estimated Recovery:</td>
                            <td style='padding: 10px 0; color: #0F172A; font-weight: bold;'>{$claim->estimated_amount}</td>
                        </tr>
                        <tr style='border-bottom: 1px solid #F0ECE4;'>
                            <td style='padding: 10px 0; color: #64748B;'>Filing Timestamp:</td>
                            <td style='padding: 10px 0; color: #64748B;'>{$claim->created_at}</td>
                        </tr>
                    </table>

                    <div style='margin-top: 20px;'>
                        <h4 style='color: #071732; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;'>
                            Circumstances & Loss Description:
                        </h4>
                        <div style='background-color: #FEF2F2; border-left: 4px solid #B91C1C; padding: 15px; font-size: 13px; color: #7F1D1D; line-height: 1.6; white-space: pre-wrap;'>{$claim->description}</div>
                    </div>
                </div>

                <div style='padding: 20px 30px; background-color: #F4F1EA; font-size: 11px; color: #64748B; text-align: center; border-top: 1px solid #E5E0D8;'>
                    <p style='margin: 0;'>Fiduciary Claims Recovery Desk • Guardian Reinsurance Brokers Uganda</p>
                </div>
            </div>
            ";

            $mail->isHTML(true);
            $mail->Body = $html;
            $mail->AltBody = "CRITICAL CLAIMS NOTICE: Docket #{$claim->id}\nCedant: {$claim->cedant_name}\nSlip: {$claim->slip_number}\nDate of Loss: {$claim->date_of_loss}\nEstimated Recovery: {$claim->estimated_amount}\n\nDescription:\n{$claim->description}";

            $mail->send();
            Log::info("PHPMailer: Claim notification sent for claim #{$claim->id}");
            return true;
        } catch (\Throwable $e) {
            Log::error("PHPMailer Error (Claim): " . $e->getMessage());
            return false;
        }
    }

    /**
     * Send email notification for Newsletter Subscription
     */
    public function sendNewsletterNotification(NewsletterSubscription $subscription): bool
    {
        try {
            $mail = $this->createMailer();

            $mail->Subject = "[Guardian Re Briefing] New Executive Subscriber: {$subscription->email}";

            $html = "
            <div style='font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; border: 1px solid #E5E0D8; background-color: #FAF8F5;'>
                <div style='background-color: #071732; padding: 25px 30px;'>
                    <h1 style='color: #FFFFFF; margin: 0; font-size: 20px; font-weight: 600;'>
                        THE GUARDIAN RE BRIEFING
                    </h1>
                    <p style='color: #93C5FD; margin: 5px 0 0 0; font-size: 12px; text-transform: uppercase;'>
                        New Executive Newsletter Subscriber
                    </p>
                </div>

                <div style='padding: 30px; background-color: #FFFFFF;'>
                    <p style='font-size: 14px; color: #1E293B; margin: 0 0 15px 0;'>
                        A new reader has subscribed to receive the Guardian Re Briefing intelligence updates:
                    </p>
                    <div style='background-color: #FAF8F5; border: 1px solid #E5E0D8; padding: 15px; font-size: 15px; font-weight: bold; color: #071732;'>
                        {$subscription->email}
                    </div>
                    <p style='font-size: 12px; color: #64748B; margin: 15px 0 0 0;'>
                        Subscribed at: {$subscription->created_at} | IP: {$subscription->ip_address}
                    </p>
                </div>
            </div>
            ";

            $mail->isHTML(true);
            $mail->Body = $html;
            $mail->AltBody = "New Executive Subscriber to The Guardian Re Briefing: {$subscription->email} at {$subscription->created_at}";

            $mail->send();
            Log::info("PHPMailer: Newsletter notification sent for {$subscription->email}");
            return true;
        } catch (\Throwable $e) {
            Log::error("PHPMailer Error (Newsletter): " . $e->getMessage());
            return false;
        }
    }
}
