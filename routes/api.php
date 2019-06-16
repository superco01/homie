<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('homestay', 'HomestayController@index');
Route::get('room', 'RoomController@index');
Route::post('homestay/', 'HomestayController@store');
Route::post('homestaySearch/', 'HomestayController@searchHomestay');
Route::post('room/', 'RoomController@store');
Route::get('homestay/{id}', 'HomestayController@showDetail');
Route::get('roomList/{id}', 'RoomController@showRoomList');
Route::get('room/{id}', 'RoomController@getRoom');
Route::get('user/{id}', 'UserController@showName');
Route::post('order', 'OrderController@store');
Route::get('order/{id}', 'OrderController@getOrder');

//User Route
Route::post('register', 'UserController@register');
Route::post('login', 'UserController@login');
Route::post('logout', 'UserController@logout');
Route::get('owner', 'UserController@getAuthenticatedUser');
//Midtrans Route
Route::post('snaptoken', 'PaymentController@token');
