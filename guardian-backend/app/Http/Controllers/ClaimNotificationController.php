<?php

namespace App\Http\Controllers;

use App\Models\ClaimNotification;
use App\Services\PhpMailerService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ClaimNotificationController extends Controller
{
    protected PhpMailerService $mailer;

    public function __construct(PhpMailerService $mailer)
    {
        $this->mailer = $mailer;
    }

    /**
     * Display a listing of claims notifications.
     */
    public function index(): JsonResponse
    {
        $claims = ClaimNotification::latest()->paginate(25);

        return response()->json([
            'status' => 'success',
            'data' => $claims,
        ]);
    }

    /**
     * Store a new claims notification docket and trigger email notification.
     */
    public function store(Request $request): JsonResponse
    {
        // Normalize payload keys for camelCase and snake_case support
        $payload = [
            'cedant_name' => $request->cedant_name ?? $request->cedantName,
            'slip_number' => $request->slip_number ?? $request->slipNumber,
            'date_of_loss' => $request->date_of_loss ?? $request->dateOfLoss,
            'estimated_amount' => $request->estimated_amount ?? $request->estimatedAmount,
            'description' => $request->description,
        ];

        $validator = Validator::make($payload, [
            'cedant_name' => 'required|string|max:255',
            'slip_number' => 'required|string|max:255',
            'date_of_loss' => 'required|date|before_or_equal:today',
            'estimated_amount' => 'nullable|string|max:255',
            'description' => 'required|string|min:10|max:5000',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Validation failed',
                'errors' => $validator->errors(),
            ], 422);
        }

        $claim = ClaimNotification::create([
            'cedant_name' => $payload['cedant_name'],
            'slip_number' => $payload['slip_number'],
            'date_of_loss' => $payload['date_of_loss'],
            'estimated_amount' => $payload['estimated_amount'],
            'description' => $payload['description'],
            'ip_address' => $request->ip(),
            'status' => 'submitted',
        ]);

        // Send email notification via PHPMailer
        $this->mailer->sendClaimNotification($claim);

        return response()->json([
            'status' => 'success',
            'message' => 'Your claim docket has been registered under strict IRA confidentiality guidelines. Our claims team will contact you directly.',
            'data' => $claim,
        ], 201);
    }
}
