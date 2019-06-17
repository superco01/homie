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

Route::get('user/{id}', 'UserController@showName');
Route::get('homestay', 'HomestayController@index');
Route::post('homestay/', 'HomestayController@createHomestay');
Route::post('homestayUpdate/', 'HomestayController@updateHomestay');
Route::post('homestaySearch/', 'HomestayController@searchHomestay');
Route::get('homestay/{id}', 'HomestayController@showDetail');
Route::get('room', 'RoomController@index');
Route::post('room/', 'RoomController@createRoom');
Route::get('roomList/{id}', 'RoomController@showRoomList');
Route::get('room/{id}', 'RoomController@getRoom');
Route::post('order', 'OrderController@createOrder');
Route::post('orderUpdate', 'OrderController@updateOrder');
Route::get('order/{id}', 'OrderController@getOrder');
//Management Route
Route::post('checkin', 'ManagementController@checkin');
Route::post('checkout', 'ManagementController@checkout');
//User Route
Route::post('register', 'UserController@register');
Route::post('login', 'UserController@login');
Route::post('logout', 'UserController@logout');
Route::get('owner', 'UserController@getAuthenticatedUser');
//Midtrans Route
Route::post('snaptoken', 'PaymentController@token');
