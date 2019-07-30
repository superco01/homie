<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Room;
use App\Homestay;

class RoomController extends Controller
{
    public function createRoom(Request $request) {
        $this->validate($request, [
            // 'title'     => 'required',
            'price'     => 'required',
            'homestay_id'   => 'required',
        ]);
        $numberOfRooms = Homestay::where('id', $request->homestay_id)->get(['number_of_rooms'])->first();
        for($i = 0; $i < $numberOfRooms->number_of_rooms; $i++) {
            $room = Room::create(['homestay_id' => $request->homestay_id,
                                  'room_number' => ($i+1),
                                  'type' => $request->type,
                                  'description' => $request->description,
                                  'photos' => $request->photos,
                                  'price' => $request->price,
                                  'room_availability' => 0,
                                  ]);
            // $room_meta = Room
        }
        return response()->json($room, 201);
    }

    public function showRoomList(Request $request) {
        $roomList = Room::where('homestay_id', $request->homestay_id)->where('room_availability', 1)->whereDoesntHave('orders.orderMeta', function ($query) use ($request) {
            $query->where('status', 'capture')->where('stay_date', $request->checkin_date);
        })->get();
        
        if ($roomList != null) {
            $roomCount = $roomList->count();
            $room = $roomList;
        }else {
            $room = null;
            $roomCount = null;
        }
        // return $homestay->toJson();
        return response()->json(compact('room', 'roomCount'), 200);
    }

    public function setAvailability(Request $request) {
        $roomState = 0;
        if ($request->room_availability == 0) {
            $roomState = 1;
        }
        $room = Room::find($request->id)->update(['room_availability' => $roomState]);

        return response()->json($room, 201);
    }

    public function getRoom($id) {
        $homestay = Room::find($id);
        return $homestay->toJson();
    }
    public function getOwnerRoom($id) {
        $ownerRoom = Room::where('homestay_id', $id)->get();
        return response()->json(compact('ownerRoom'), 200);
    }

    public function updateRoom(Request $request) {
        $room = Room::where('id', $request->id)->update($request->all());
        return response()->json($room, 201);
    }
}
