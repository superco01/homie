<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Order;
use App\OrderMeta;
use App\Room;
use App\Homestay;
use DateTime;

class OrderController extends Controller
{
    // public function stubSave($saveOrder) {
    //     return $saveOrder;
    // }

    // public function createOrder(Request $request) {
    //     $inputOrder = "Order Failed";
        
    //     if($inputOrder == "Order Success") {
    //        $result = $this->stubSave($inputOrder);
    //        return response()->json($result);
    //     }
    //     else {
    //        return response()->json($inputOrder);
    //     }
     
    //  }
     

    public function createOrder(Request $request) {
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
        // error_log($checkinDate);
        // error_log($checkoutDate);
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
        error_log($order->id);
        for ($i=0; $i <= $request->duration; $i++) { 
            $order_id = $order->id;
            $stay_date = date('Y-m-d', strtotime($request->checkin_date. ' + '.$i.' day'));
            $orderMeta = OrderMeta::create([
                'order_id' => $order_id,
                'stay_date' => $stay_date,
                'status' => 'capture',
            ]);
        }
                        

        return response()->json($order, 201);
    }

    public function updateOrder(Request $request) {
        $id = $request->order_id;
        $request->request->remove('order_id');
        $request->request->remove('status_code');
        $request->request->remove('status_message');
        $orderUpdate = Order::where('id', $id)->update($request->all());
        $orderUpdateMeta = OrderMeta::where('order_id', $id)->update(['status' => $request->transaction_status]);
        // return $orderUpdate->toJson();
    }

    public function getOrder($id) {
        $order = Order::with(['orderMeta'])->find($id);
        // $order = Order::with(['rooms'])->find($id);
        $homestay = Homestay::where('id', $order['homestay_id'])->first();

        return response()->json(compact('order', 'homestay'));
    }

    public function getOrderList($id) {
        $order = Order::where('homestay_id', $id)->get();
        $order = Order::where('homestay_id', $id)->where('transaction_status', 'capture')->get();

        $report = Order::where('homestay_id', $id)->get();

        return response()->json(compact('order', 'report'), 200);
    }

    // public function invoice(Request $request) {
    //     $invoice = Order::with(['transactions' => function ($query) {
    //         $query->where('status', 'paid');
    //     }])->find($id);

    //     return $invoice->toJson();
    // }
}
