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
Route::group(['middleware' => 'auth'], function()
{
    //Route Admin
    Route::get('adminowner', 'AdminController@indexOwner');
    Route::get('adminhomestay', 'AdminController@indexHomestay');
    Route::get('adminorder', 'AdminController@indexTransaction');
    Route::post('admindeleteowner', 'AdminController@deleteOwner');
    Route::post('admindeletehomestay', 'AdminController@deleteHomestay');
    //Management Route
    Route::post('roomAvailability', 'ManagementController@roomAvailability');
    Route::post('checkin', 'ManagementController@checkin');
    Route::post('checkout', 'ManagementController@checkout');
    Route::post('report', 'ManagementController@report');
});

//Homestay Route
// Route::get('homestay', 'HomestayController@index');
Route::post('homestay/', 'HomestayController@createHomestay');
Route::post('homestayUpdate/', 'HomestayController@updateHomestay');
Route::post('homestaySearch/', 'HomestayController@searchHomestay');
Route::get('homestay/{id}', 'HomestayController@showDetail');
//Room Route
Route::get('room', 'RoomController@index');
Route::post('room/', 'RoomController@createRoom');
Route::post('roomList', 'RoomController@showRoomList');
Route::get('room/{id}', 'RoomController@getRoom');
Route::get('roomOwner/{id}', 'RoomController@getOwnerRoom');
//Order Route
Route::post('order', 'OrderController@createOrder');
Route::post('orderUpdate', 'OrderController@updateOrder');
Route::get('order/{id}', 'OrderController@getOrder');
Route::get('orderList/{id}', 'OrderController@getOrderList');
//Management Route
// Route::post('roomAvailability', 'ManagementController@roomAvailability');
// Route::post('checkin', 'ManagementController@checkin');
// Route::post('checkout', 'ManagementController@checkout');
// Route::post('report', 'ManagementController@report');
//Admin Route
// Route::get('adminowner', 'AdminController@indexOwner');
// Route::get('adminhomestay', 'AdminController@indexHomestay');
// Route::get('adminorder', 'AdminController@indexTransaction');
// Route::post('admindeleteowner', 'AdminController@deleteOwner');
// Route::post('admindeletehomestay', 'AdminController@deleteHomestay');
//User Route
Route::post('register', 'UserController@register');
Route::post('login', 'UserController@login');
// Route::post('logout', 'UserController@logout');
Route::get('owner', 'UserController@getAuthenticatedUser');
Route::get('user/{id}', 'UserController@showName');
Route::get('logout', 'UserController@logout');
//Midtrans Route
Route::post('snaptoken', 'PaymentController@token');
