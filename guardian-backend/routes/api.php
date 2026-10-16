<?php

use App\Http\Controllers\ClaimNotificationController;
use App\Http\Controllers\ContactInquiryController;
use App\Http\Controllers\NewsletterSubscriptionController;
use App\Http\Controllers\QuoteRequestController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes - Guardian Reinsurance
|--------------------------------------------------------------------------
| Strictly RESTful JSON APIs for website forms and institutional dockets.
*/

Route::get('/health', function () {
    return response()->json([
        'status' => 'success',
        'message' => 'Guardian Reinsurance API is operating normally.',
        'timestamp' => now()->toIso8601String(),
    ]);
});

// Contact Inquiries
Route::get('/contact', [ContactInquiryController::class, 'index']);
Route::post('/contact', [ContactInquiryController::class, 'store']);

// Quote & Broking Terms Requests
Route::get('/quotes', [QuoteRequestController::class, 'index']);
Route::post('/quotes', [QuoteRequestController::class, 'store']);

// Claims Notifications
Route::get('/claims', [ClaimNotificationController::class, 'index']);
Route::post('/claims', [ClaimNotificationController::class, 'store']);

// Newsletter Subscriptions
Route::get('/newsletter', [NewsletterSubscriptionController::class, 'index']);
Route::post('/newsletter', [NewsletterSubscriptionController::class, 'store']);

// Sanctum user endpoint
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
