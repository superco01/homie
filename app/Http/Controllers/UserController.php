<?php

namespace App\Http\Controllers;

use App\User;
use App\Homestay;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Facades\JWTFactory;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Tymon\JWTAuth\PayloadFactory;
use Tymon\JWTAuth\JWTManager as JWT;

class UserController extends Controller 
{
    public function register(Request $request) {
        $this->validate($request,[
            'name'      => 'required',
            'email'     => 'required',
            'password'  => 'required|min:4',
        ]);
        
        $user = User::create([
            'name'      => $request->json()->get('name'),
            'email'     => $request->json()->get('email'),
            'password'  => Hash::make($request->json()->get('password')),
        ]);

        $token = JWTAuth::fromUser($user);

        return response()->json(compact('user', 'token'), 201);
    }

    public function login(Request $request) {
        $this->validate($request,[
            'email'     => 'required',
            'password'  => 'required|min:4',
        ]);

        $credentials = $request->json()->all();
        
        try {
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }
        $user = User::where('email', $request->email)->get()->first();
        error_log($user);
        $homestayId = 0;
        error_log($homestayId);
        if ($user->name != 'admin') {
            $id = Homestay::where('user_id', $user->id)->first('id');
            if ($id != null) {
                $homestayId = $id->id;
            }
        }
        error_log($homestayId);

        return response()->json(compact('token', 'user', 'homestayId'));
    }

    public function logout() {
        auth()->logout();

        return response()->json(['message' => 'successfully logged out']);
    }

    public function getAuthenticatedUser() {
        try {
            if (!$user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['user not found'], 404);
            }
        }catch(Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            return response()->json(['token expired'], $e->getStatusCode());
        }catch(Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json(['token invalid'], $e->getStatusCode());
        }catch(Tymon\JWTAuth\Exceptions\JWTException $e) {
            return response()->json(['token absent'], $e->getStatusCode());
        }
        return response()->json(compact('user'));
    }

    public function showName($id) {
        $homestay = User::find($id);
    
        return $homestay->toJson();
    }
}
