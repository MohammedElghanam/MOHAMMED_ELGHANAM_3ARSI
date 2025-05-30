<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GalleryVideo extends Model
{
    use HasFactory;

    protected $fillable = [
        'video',
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }
}
