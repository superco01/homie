<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Room;
use App\Order;
use App\OrderMeta;
use App\Transaction;

class ManagementController extends Controller
{
    public function roomAvailability(Request $request) {
        date_default_timezone_set('Asia/Jakarta');
        $currentDate = date('Y-m-d');
        error_log($currentDate);

        $room = Room::where('homestay_id', $request->homestay_id)->with(['orders.orderMeta' => function ($query) use ($currentDate) {
            $query->where('stay_date', $currentDate)->where(function ($q) {
                $q->where('status','capture')->orWhere('status', 'active');
            });
        }])->get();

        if (!empty($room->order)) {
            $roomPlain = Room::where('homestay_id', $request->homestay_id)->with(['orders.orderMeta'])->get();
            // error_log($roomPlain);
            error_log('if is not empty');
            return $roomPlain->toJson();
        }
        // error_log($room);

        return $room->toJson();
    }

    public function checkin(Request $request) {
        // $this->validate($request,[
            // 'guest_name'      => 'required',
            // 'email'     => 'required',
            // 'password'  => 'required|min:4',
        // ]);

        $transactionStatus = Order::where('guest', $request->guest_name)->where('id', $request->order_id)->get(['transaction_status']);
        if ($transactionStatus[0]->transaction_status == 'capture' ) {
            $transactionStatus = Order::where('guest', $request->guest_name)->where('id', $request->order_id)->update(['transaction_status' => 'active']);
            // $orderMetaUpdate = OrderMeta::where('order_id', $id)->update(['status' => 'used']);
            $orderMetaUpdate = Order::where('guest', $request->guest_name)->where('id', $request->order_id)->first();
            $orderMetaUpdate->orderMeta()->update(['status' => 'active']);
            return response()->json('Success', 200);
        }
        else {
            return response()->json('transaction not found', 404);
        }
    }
    
    public function checkout(Request $request) {
        // $this->validate($request,[
        //     'guest_name'      => 'required',
            // 'email'     => 'required',
            // 'password'  => 'required|min:4',
        // ]);

        $transactionStatus = Order::where('guest', $request->guest_name)->where('id', $request->order_id)->get(['transaction_status']);
        if ($transactionStatus[0]->transaction_status == 'active' ) {
            $transactionStatus = Order::where('guest', $request->guest_name)->where('id', $request->order_id)->update(['transaction_status' => 'used']);
            $orderMetaUpdate = Order::where('guest', $request->guest_name)->where('id', $request->order_id)->first();
            $orderMetaUpdate->orderMeta()->update(['status' => 'used']);
            return response()->json('Success', 200);
        }
        else {
            return response()->json('transaction is not active', 404);
        }
    }

    public function report(Request $request) {
        $order = Order::where('homestay_id', 1)->get();
        $transaction = array(
            "Success" => array(
                $order['created_at'] => 1
            )
        );
        // for ($i=0; $i < $order->count(); $i++) { 
        //     if (condition) {
        //         # code...
        //     }
        // }

        return response()->json(compact('order', 'transaction'), 200);
    }
}
