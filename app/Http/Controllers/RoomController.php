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
                                  'room_availability' => $request->room_availability,
                                  ]);
            // $room_meta = Room
        }
        return response()->json($room, 201);
    }

    public function showRoomList(Request $request) {
        
        // $roomList = Room::where('homestay_id', $request->homestay_id)->where('checkin_date', '<>', $request->checkin_date)->with(['orders.orderMeta' => function ($query) use ($request){
        //     $query->where('stay_date', '<>', $request->checkin_date);
        // }])->get();

        // $roomList = Room::where('homestay_id', $request->homestay_id)->whereHas('orders', function ($query) use ($request) {
            // $query->where('status', '<>','capture')->where('stay_date', '<>', $request->checkin_date);
        // })->get();

        // $roomList = Room::where('homestay_id', $request->homestay_id)->whereHas('orders', function ($query) use ($request) {
            // $query->where('status', '<>','capture')->where('stay_date', '<>', $request->checkin_date);
        // })->get();

        $roomList = Room::where('homestay_id', $request->homestay_id)->whereDoesntHave('orders.orderMeta', function ($query) use ($request) {
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

    public function getRoom($id) {
        $homestay = Room::find($id);
        
        return $homestay->toJson();
    }
    public function getOwnerRoom($id) {
        $ownerRoom = Room::where('homestay_id', $id)->get();
        
        return response()->json(compact('ownerRoom'), 200);
    }
}
