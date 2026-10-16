<?php

namespace App\Http\Controllers;

use App\Models\QuoteRequest;
use App\Services\PhpMailerService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class QuoteRequestController extends Controller
{
    protected PhpMailerService $mailer;

    public function __construct(PhpMailerService $mailer)
    {
        $this->mailer = $mailer;
    }

    /**
     * Display a listing of quote requests.
     */
    public function index(): JsonResponse
    {
        $quotes = QuoteRequest::latest()->paginate(25);

        return response()->json([
            'status' => 'success',
            'data' => $quotes,
        ]);
    }

    /**
     * Store a new quote request and trigger email notification.
     */
    public function store(Request $request): JsonResponse
    {
        // Normalize payload keys for camelCase and snake_case support
        $payload = [
            'company_name' => $request->company_name ?? $request->companyName,
            'contact_person' => $request->contact_person ?? $request->contactPerson,
            'email' => $request->email,
            'service' => $request->service ?? 'treaty',
            'message' => $request->message,
        ];

        $validator = Validator::make($payload, [
            'company_name' => 'required|string|max:255',
            'contact_person' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'service' => 'required|string|max:100',
            'message' => 'required|string|min:10|max:5000',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Validation failed',
                'errors' => $validator->errors(),
            ], 422);
        }

        $quote = QuoteRequest::create([
            'company_name' => $payload['company_name'],
            'contact_person' => $payload['contact_person'],
            'email' => $payload['email'],
            'service' => $payload['service'],
            'message' => $payload['message'],
            'ip_address' => $request->ip(),
            'status' => 'new',
        ]);

        // Send email notification via PHPMailer
        $this->mailer->sendQuoteNotification($quote);

        return response()->json([
            'status' => 'success',
            'message' => 'Your terms enquiry has been received. A senior broking officer will contact you within 24 business hours.',
            'data' => $quote,
        ], 201);
    }
}
