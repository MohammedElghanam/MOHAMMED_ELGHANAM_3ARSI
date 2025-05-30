<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        if (!$request->user()) {
            return response()->json(['message' => 'Unauthenticated'], 401);
        }
        
        $posts = $request->user()->posts()->get();
        return response()->json($posts);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'description' => 'nullable|string'
        ]);

        if (!Storage::disk('public')->exists('service_images')) {
            Storage::disk('public')->makeDirectory('service_images');
        }

        $imagePath = $request->file('image')->store('service_images', 'public');

        $media = $request->user()->posts()->create([
            'image' => $imagePath,
            'description' => $request->description
        ]);

        return response()->json([
            'message' => 'Media added successfully',
            'media' => $media
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }
}
