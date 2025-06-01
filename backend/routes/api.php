<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\GalleryImageController;
use App\Http\Controllers\GalleryVideoController;
use App\Http\Controllers\MariageController;
use App\Http\Controllers\PackageController;


Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('services', ServiceController::class);
    Route::apiResource('posts', PostController::class);
    Route::apiResource('images', GalleryImageController::class);
    Route::apiResource('videos', GalleryVideoController::class);
    Route::apiResource('mariages', MariageController::class);
    Route::apiResource('packages', PackageController::class);

});

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
Route::get('allservices', [ServiceController::class, 'allservices']);
