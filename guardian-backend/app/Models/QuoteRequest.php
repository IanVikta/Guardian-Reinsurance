<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class QuoteRequest extends Model
{
    protected $fillable = [
        'company_name',
        'contact_person',
        'email',
        'service',
        'message',
        'ip_address',
        'status',
    ];
}
