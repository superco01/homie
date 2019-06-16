<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Order;
use App\Room;
use App\Homestay;
use DateTime;

class OrderController extends Controller
{
    public function store(Request $request) {
        $this->validate($request, [
            'name'          => 'required',
            'guest'         => 'required',
            'email'         => 'required',
            'phone_number'  => 'required',
            'room_id'       => 'required',
        ]);
        $checkinDate = date('Y-m-d', strtotime($request->checkin_date));
        $checkoutDate = date('Y-m-d', strtotime($request->checkin_date. ' + '.$request->duration.' day'));
        $roomPrice = Room::where('id', $request->room_id)->first(['price']);
        error_log($checkinDate);
        error_log($checkoutDate);
        // dd($roomPrice);
        $priceTotal = $roomPrice->price * $request->duration;

        // dd($request);
        $order = Order::create(['name' => $request->name,
                                'guest' => $request->guest,
                                'email' => $request->email,
                                'phone_number' => $request->phone_number,
                                'room_id' => $request->room_id,
                                'room_number' => $request->room_number,
                                'homestay_id' => $request->homestay_id,
                                'checkin_date' => $checkinDate,
                                'duration' => $request->duration,
                                'checkout_date' => $checkoutDate,
                                'price_total' => $priceTotal,
                                ]);
        return response()->json($order, 201);
    }

    public function getOrder($id) {
        $order = Order::find($id);
        // $order = Order::with(['rooms'])->find($id);
        $homestay = Homestay::where('id', $order['homestay_id'])->first();

        return response()->json(compact('order', 'homestay'));
    }

    public function invoice(Request $request) {
        $invoice = Order::with(['transactions' => function ($query) {
            $query->where('status', 'paid');
        }])->find($id);

        return $invoice->toJson();
    }
}
