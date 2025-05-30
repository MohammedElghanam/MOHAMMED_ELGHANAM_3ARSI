<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mariage extends Model
{
    use HasFactory;

    protected $fillable = [
        'bride_name',
        'groom_name',
        'wedding_date',
        'location',
        'city',
        'phone',
        'guests_number',
        'package'
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }
}
