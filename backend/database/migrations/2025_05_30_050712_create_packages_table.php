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
        Schema::create('packages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->string('neggafa')->nullable();
            $table->string('music_band')->nullable();
            $table->string('caterer')->nullable();
            $table->string('makeup')->nullable();
            $table->string('hair_style')->nullable();
            $table->string('party_room')->nullable();
            $table->string('photographer')->nullable();
            $table->string('hotel')->nullable();
            $table->string('honeymoon')->nullable();
            $table->string('price');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('packages');
    }
};
