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
//Homestay Route
Route::get('homestay', 'HomestayController@index');
Route::post('homestay/', 'HomestayController@createHomestay');
Route::post('homestayUpdate/', 'HomestayController@updateHomestay');
Route::post('homestaySearch/', 'HomestayController@searchHomestay');
Route::get('homestay/{id}', 'HomestayController@showDetail');
//Room Route
Route::get('room', 'RoomController@index');
Route::post('room/', 'RoomController@createRoom');
Route::get('roomList/{id}', 'RoomController@showRoomList');
Route::get('room/{id}', 'RoomController@getRoom');
//Order Route
Route::post('order', 'OrderController@createOrder');
Route::post('orderUpdate', 'OrderController@updateOrder');
Route::get('order/{id}', 'OrderController@getOrder');
Route::get('orderList/{id}', 'OrderController@getOrderList');
//Management Route
Route::post('roomAvailability', 'ManagementController@roomAvailability');
Route::post('checkin', 'ManagementController@checkin');
Route::post('checkout', 'ManagementController@checkout');
Route::post('report', 'ManagementController@report');
//User Route
Route::post('register', 'UserController@register');
Route::post('login', 'UserController@login');
Route::post('logout', 'UserController@logout');
Route::get('owner', 'UserController@getAuthenticatedUser');
//Midtrans Route
Route::post('snaptoken', 'PaymentController@token');
