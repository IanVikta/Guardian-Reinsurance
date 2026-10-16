<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('claim_notifications', function (Blueprint $table) {
            $table->id();
            $table->string('cedant_name');
            $table->string('slip_number');
            $table->date('date_of_loss');
            $table->string('estimated_amount')->nullable();
            $table->text('description');
            $table->string('ip_address')->nullable();
            $table->string('status')->default('submitted');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('claim_notifications');
    }
};
