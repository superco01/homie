<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Homestay;
use App\Room;
use App\Order;
use Mail;
use App\Mail\PaymentConfirmation;

class HomestayController extends Controller
{
    public function index() {
        $homestays = Homestay::get();
        return $homestays->toJson();
    }

    public function createHomestay(Request $request) {
        // error_log($request->id_user);
        $this->validate($request, [
            'name'          => 'required',
            'location'      => 'required',
            'address'       => 'required',
            'facilities'    => 'required',
            'number_of_rooms' => 'required',
            'photo1'        => 'required',
            'photo2'        => 'required',
        ]);
        error_log($request->photo1);

        $homestay = Homestay::create(['user_id' => $request->user_id,
                                      'name' => $request->name,
                                      'location' => $request->location,
                                      'address' => $request->address,
                                      'facilities' => $request->facilities,
                                      'number_of_rooms' => $request->number_of_rooms,
                                      'photo1' => 'images/'.$request->photo1,
                                      'photo2' => 'images/'.$request->photo2,
                                      ]);

        return response()->json($homestay, 201);
    }

    public function updateHomestay(Request $request) {
        error_log($request);
        // $homestay = Homestay::find($request->id);
        // $homestay->update($request->all());
        $homestay = Homestay::where('user_id', $request->user_id)->update($request->all());
        // $test = Homestay::where('id')
        // error_log($homestay);

        return response()->json($homestay, 201);
    }

    public function showDetail($id) {
        $homestay = Homestay::where('id', $id)->with(['rooms' => function ($query) {
            // $query->where('price', 111111);
        }])->first();

        return $homestay->toJson();
    }

    // public function getLowestPrice() {

    // }
    
    public function searchHomestay(Request $request) {
        $searchResult = ($request->location == null) ? (
        $homestaySearch = Homestay::with(['rooms.orders' => function ($query) {
            // $query->where('room_availability', 1);
        }])->get()
        ) : (
        $homestaySearch = Homestay::where('location', $request->location)->with(['rooms.orders' => function ($query) {
            // $query->where('status', '');
        }])->get()
        );
    
        //SEND EMAIL NOTIFICATION TO OWNER
        // $order = Order::where('id', 82)->first();
        // $user = $order->room->homestay->user;

        // $to_name = $user->name;
        // $to_email = 'habibyafi45@gmail.com';
        // $data = array('name'=>"Homie", 'body' => "A test mail");

        // Mail::to($to_email, $to_name)->send(new PaymentConfirmation($order));

        return response()->json(compact('homestaySearch'));
    }

}
