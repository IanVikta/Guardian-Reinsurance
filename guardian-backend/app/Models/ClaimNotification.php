<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ClaimNotification extends Model
{
    protected $fillable = [
        'cedant_name',
        'slip_number',
        'date_of_loss',
        'estimated_amount',
        'description',
        'ip_address',
        'status',
    ];

    protected $casts = [
        'date_of_loss' => 'date',
    ];
}
