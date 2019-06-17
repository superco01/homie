<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Homestay;
use App\Room;

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
        ]);

        $homestay = Homestay::create(['user_id' => $request->user_id,
                                      'name' => $request->name,
                                      'location' => $request->location,
                                      'address' => $request->address,
                                      'facilities' => $request->facilities,
                                      'number_of_rooms' => $request->number_of_rooms,
                                      ]);

        return response()->json($homestay, 201);
    }

    public function update(Request $request, Homestay $homestay) {
        $homestay->update($request->all());

        return response()->json($product, 201);
    }

    public function showDetail($id) {
        $homestay = Homestay::with(['rooms' => function ($query) {
            $query->where('price', 111111);
        }])->find($id);

        return $homestay->toJson();
    }

    public function getLowestPrice() {

    }
    
    public function searchHomestay(Request $request) {
        $homestaySearch = Homestay::with(['rooms.orders' => function ($query) {
            // $query->where('status', '');
        }])->get();
        // $homestaySearch->orders;
        // dd($homestaySearch[]);
        // error_log($homestaySearch[9]);
        return response()->json(compact('homestaySearch'));
    }

}
