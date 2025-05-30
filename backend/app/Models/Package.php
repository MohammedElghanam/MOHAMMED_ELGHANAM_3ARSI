<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'neggafa',
        'music_band',
        'caterer',
        'makeup',
        'hair_style',
        'party_room',
        'photographer',
        'hotel',
        'honeymoon',
        'price'
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }
}
