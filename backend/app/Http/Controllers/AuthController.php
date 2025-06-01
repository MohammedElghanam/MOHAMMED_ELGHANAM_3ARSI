<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register (Request $request){
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255||unique:users,email',
            'password' => 'required|string|min:6',
            'role' => 'required|string',
        ]);

        $user = User::create($data);

        $token = $user->createToken($request->name);

        return response()->json([
            'message' => 'User registered successfully',
            'user' => $user,
            'token' => $token->plainTextToken,
        ], 201);
    }

    public function login (Request $request) {
        $request->validate([
            'email' => 'required|email|max:255|',
            'password' => 'required|string|min:6',
        ]);

        $user = User::where('email', $request->email)->first();
        $token = $user->createToken($user->name);

        $data=[
            'email' => $request->email,
            'password'=> $request->password,
        ];
        
        if (!Auth::check()) {
            if(Auth::attempt($data)){

                return response()->json([
                    'message' => 'User logedd successfully',
                    'user' => $user,
                    'token' => $token->plainTextToken,
                ], 201);
                        
            }else {
                return response()->json([
                    'error' => 'Invalid credentials. Please try again.'
                ], 401);
            }
        }
    }

    public function logout (Request $request) {
        $request->user()->tokens()->delete();
        return response()->json([
            'message' => 'you are logged in'
        ]);
    }

}
