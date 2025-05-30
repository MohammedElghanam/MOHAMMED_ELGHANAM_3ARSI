<?php

namespace App\Http\Controllers;

use App\Models\Package;
use Illuminate\Http\Request;

class PackageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        if (!$request->user()) {
            return response()->json(['message' => 'Unauthenticated'], 401);
        }
        
        $packages = $request->user()->packages()->get();
        return response()->json($packages);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'neggafa' => 'nullable|string|max:255',
            'music_band' => 'nullable|string|max:255',
            'caterer' => 'nullable|string|max:255',
            'makeup' => 'nullable|string|max:255',
            'hair_style' => 'nullable|string|max:255',
            'party_room' => 'nullable|string|max:255',
            'photographer' => 'nullable|string|max:255',
            'hotel' => 'nullable|string|max:255',
            'honeymoon' => 'nullable|string|max:255',
            'price' => 'required|numeric|min:0'
        ]);

        $package = $request->user()->packages()->create($validated);

        return response()->json([
            'message' => 'package created successfully',
            'data' => $package
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Package $package)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Package $package)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Package $package)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Package $package)
    {
        //
    }
}
