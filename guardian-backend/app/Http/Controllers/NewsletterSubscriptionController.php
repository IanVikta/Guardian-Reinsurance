<?php

namespace App\Http\Controllers;

use App\Models\NewsletterSubscription;
use App\Services\PhpMailerService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class NewsletterSubscriptionController extends Controller
{
    protected PhpMailerService $mailer;

    public function __construct(PhpMailerService $mailer)
    {
        $this->mailer = $mailer;
    }

    /**
     * Display a listing of newsletter subscriptions.
     */
    public function index(): JsonResponse
    {
        $subscriptions = NewsletterSubscription::latest()->paginate(50);

        return response()->json([
            'status' => 'success',
            'data' => $subscriptions,
        ]);
    }

    /**
     * Store or renew a newsletter subscription and trigger email notification.
     */
    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Validation failed',
                'errors' => $validator->errors(),
            ], 422);
        }

        $existing = NewsletterSubscription::where('email', $request->email)->first();

        if ($existing) {
            if ($existing->status !== 'active') {
                $existing->update([
                    'status' => 'active',
                    'ip_address' => $request->ip(),
                ]);
                $this->mailer->sendNewsletterNotification($existing);
            }

            return response()->json([
                'status' => 'success',
                'message' => 'You are already subscribed to The Guardian Re Briefing.',
                'data' => $existing,
            ], 200);
        }

        $subscription = NewsletterSubscription::create([
            'email' => $request->email,
            'status' => 'active',
            'ip_address' => $request->ip(),
        ]);

        // Send email notification via PHPMailer
        $this->mailer->sendNewsletterNotification($subscription);

        return response()->json([
            'status' => 'success',
            'message' => 'Thank you for subscribing to The Guardian Re Briefing.',
            'data' => $subscription,
        ], 201);
    }
}
