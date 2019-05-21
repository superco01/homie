<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Homestay;

class HomestayController extends Controller
{
    public function index() {
        $homestays = Homestay::get();
        
        return $homestays->toJson();
    }

    public function store(Request $request) {
        $this->validate($request, [
            'name'          => 'required',
            'location'      => 'required',
            'address'       => 'required',
            'facilities'    => 'required',
            'number_of_rooms' => 'required',
        ]);

        $homestay = Homestay::create($request->all());
        return response()->Json($homestay, 201);
    }

    public function update(Request $request, Homestay $homestay) {
        $homestay->update($request->all());

        return response()->json($product, 201);
    }

    // public function showDetail(Request $request) {
        
    // }
}
