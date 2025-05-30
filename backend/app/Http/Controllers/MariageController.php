<?php

namespace App\Http\Controllers;

use App\Models\Mariage;
use Illuminate\Http\Request;

class MariageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        if (!$request->user()) {
            return response()->json(['message' => 'Unauthenticated'], 401);
        }
        
        $mariages = $request->user()->mariages()->get();
        return response()->json($mariages);
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
            'bride_name' => 'required|string|max:255',
            'groom_name' => 'required|string|max:255',
            'wedding_date' => 'required|date|after_or_equal:today',
            'location' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'guests_number' => 'required|integer|min:1|max:1000',
            'package' => 'required|string|in:basic,premium,vip'
        ]);

        $wedding = $request->user()->mariages()->create($validated);

        return response()->json([
            'message' => 'weeding created successfully',
            'data' => $wedding
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Mariage $mariage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Mariage $mariage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Mariage $mariage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Mariage $mariage)
    {
        //
    }
}
