<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

class ServiceController extends Controller implements HasMiddleware
{

    public static function middleware()
    {
        return [
            new Middleware('auth:sanctum', except: ['allservices'])
        ];
    }

    public function allservices(Request $request)
    {
        $services = Service::all();
        return response()->json($services);
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        if (!$request->user()) {
            return response()->json(['message' => 'Unauthenticated'], 401);
        }
        
        $services = $request->user()->services()->get();
        return response()->json($services);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string|max:255',
            'type' => 'required|string|max:100',
            'phone' => 'required|digits:10',
            'price' => 'required|numeric|min:0',
        ]);

        $service = $request->user()->services()->create($fields);
        
        return response()->json([
            'message' => 'the service created successfully',
            'service' => $service,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Service $service)
    {
        if ($request->user()->id !== $service->user_id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $fields = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'type' => 'sometimes|required|string|max:100',
            'phone' => 'sometimes|required|digits:10',
            'price' => 'sometimes|required|numeric|min:0',
        ]);

        $service->update($fields);

        return response()->json([
            'message' => 'Service updated successfully',
            'service' => $service,
        ]);
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Service $service, Request $request)
    {
        if ($request->user()->id !== $service->user_id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $service->delete();

        return response()->json(['message' => 'Service deleted successfully']);
    }

}
