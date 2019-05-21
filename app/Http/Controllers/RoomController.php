<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Room;

class RoomController extends Controller
{
    public function index() {
        $rooms = Room::get();
        
        return $rooms->toJson();
    }

    public function store(Request $request) {
        $this->validate($request, [
            'title'     => 'required',
            'price'     => 'required',
            'id_homestay'   => 'required',
        ]);

        $room = Room::create($request->all());
        return response()->json($room, 201);
    }
}
