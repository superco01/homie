<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Room;
use App\Order;
use App\Transaction;

class ManagementController extends Controller
{
    public function checkin(Request $request) {
        $this->validate($request,[
            'guest_name'      => 'required',
            // 'email'     => 'required',
            // 'password'  => 'required|min:4',
        ]);

        $transactionStatus = Order::where('guest', $request->guest_name)->where('room_number', $request->room_number)->get(['transaction_status']);
        if ($transactionStatus[0]->transaction_status == 'capture' ) {
            $transactionStatus = Order::where('guest', $request->guest_name)->where('room_number', $request->room_number)->update(['transaction_status' => 'active']);
            return response()->json('Success', 200);
        }
        else {
            return response()->json('transaction not found', 404);
        }
    }
    
    public function checkout(Request $request) {
        $this->validate($request,[
            'guest_name'      => 'required',
            // 'email'     => 'required',
            // 'password'  => 'required|min:4',
        ]);

        $transactionStatus = Order::where('guest', $request->guest_name)->where('room_number', $request->room_number)->get(['transaction_status']);
        if ($transactionStatus[0]->transaction_status == 'active' ) {
            $transactionStatus = Order::where('guest', $request->guest_name)->where('room_number', $request->room_number)->update(['transaction_status' => 'used']);
            return response()->json('Success', 200);
        }
        else {
            return response()->json('transaction is not active', 404);
        }
    }
}
