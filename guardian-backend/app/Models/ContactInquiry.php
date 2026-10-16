<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContactInquiry extends Model
{
    protected $fillable = [
        'name',
        'company',
        'email',
        'phone',
        'service',
        'urgency',
        'message',
        'ip_address',
        'status',
    ];
}
