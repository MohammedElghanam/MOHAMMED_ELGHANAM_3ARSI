<?php

namespace App\Http\Controllers;

use App\Models\GalleryVideo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class GalleryVideoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        if (!$request->user()) {
            return response()->json(['message' => 'Unauthenticated'], 401);
        }
        
        $galleryVideo = $request->user()->galleryVideos()->get();
        return response()->json($galleryVideo);
    }

    

    public function store(Request $request)
    {
        $request->validate([
            'video' => 'required|file|mimetypes:video/mp4'
        ]);

        if (!Storage::disk('public')->exists('gallery_videos')) {
            Storage::disk('public')->makeDirectory('gallery_videos');
        }

        $videoPath = $request->file('video')->store('gallery_videos', 'public');

        $media = $request->user()->galleryVideos()->create([
            'video' => $videoPath
        ]);

        return response()->json([
            'message' => 'Video uploaded successfully',
            'media' => $media,
            'video_url' => asset('storage/'.$videoPath)
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(GalleryVideo $galleryVideo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(GalleryVideo $galleryVideo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, GalleryVideo $galleryVideo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(GalleryVideo $galleryVideo)
    {
        //
    }
}
