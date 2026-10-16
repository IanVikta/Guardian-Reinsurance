<?php

namespace App\Http\Controllers;

use App\Models\ContactInquiry;
use App\Services\PhpMailerService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactInquiryController extends Controller
{
    protected PhpMailerService $mailer;

    public function __construct(PhpMailerService $mailer)
    {
        $this->mailer = $mailer;
    }

    /**
     * Display a listing of inquiries.
     */
    public function index(): JsonResponse
    {
        $inquiries = ContactInquiry::latest()->paginate(25);

        return response()->json([
            'status' => 'success',
            'data' => $inquiries,
        ]);
    }

    /**
     * Store a new contact inquiry and trigger email notification.
     */
    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'company' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:50',
            'service' => 'nullable|string|max:100',
            'urgency' => 'nullable|string|in:standard,priority,urgent',
            'message' => 'required|string|min:10|max:5000',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Validation failed',
                'errors' => $validator->errors(),
            ], 422);
        }

        $inquiry = ContactInquiry::create([
            'name' => $request->name,
            'company' => $request->company,
            'email' => $request->email,
            'phone' => $request->phone,
            'service' => $request->service ?? 'general',
            'urgency' => $request->urgency ?? 'standard',
            'message' => $request->message,
            'ip_address' => $request->ip(),
            'status' => 'new',
        ]);

        // Send email notification via PHPMailer
        $this->mailer->sendContactNotification($inquiry);

        return response()->json([
            'status' => 'success',
            'message' => 'Your inquiry has been registered with our senior broking directors in Kampala. We will respond within 24 business hours.',
            'data' => $inquiry,
        ], 201);
    }
}
