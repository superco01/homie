<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Transaction;

use App\Veritrans\Midtrans;
use App\Order;

class PaymentController extends Controller
{
    public function __construct() {
        Midtrans::$serverKey = 'SB-Mid-server-MhIjQw_PkDBGIxnf9mn2XHIQ';
        Midtrans::$isProduction = false;
    }

    public function token(Request $request) {
        error_log('masuk ke snap token lewat route API');
        $midtrans = new Midtrans;

        $transaction_details = array(
            'order_id'      => $request->order['id'],
            'gross_amount'  => $request->order['price_total'],
        );

        $items = [
            array(
                'id'                => 'item1',
                'price'         => 0,
                'quantity'  => 1,
                'name'          => $request->homestay['name']
            ),
            array(
                'id'                => $request->order['id'],
                'price'         => $request->order['price_total'],
                'quantity'  => 1,
                'name'          => $request->order['duration'].' nights'
            ),
        ];

        // Populate customer's billing address
        $billing_address = array(
            // 'first_name'        => "Andri",
            // 'last_name'         => "Setiawan",
            // 'address'           => "Karet Belakang 15A, Setiabudi.",
            // 'city'                  => "Jakarta",
            // 'postal_code'   => "51161",
            // 'phone'                 => "081322311801",
            // 'country_code'  => 'IDN'
            );
        // Populate customer's shipping address
        $shipping_address = array(
            // 'first_name'    => "John",
            // 'last_name'     => "Watson",
            // 'address'       => "Bakerstreet 221B.",
            // 'city'              => "Jakarta",
            // 'postal_code' => "51162",
            // 'phone'             => "081322311801",
            // 'country_code'=> 'IDN'
            );
        // Populate customer's Info
        $customer_details = array(
            'first_name'            => $request->order['name'],
            'guest_name'             => $request->order['guest'],
            'email'                     => $request->order['email'],
            'phone'                     => $request->order['phone_number'],
            // 'billing_address' => $billing_address,
            // 'shipping_address'=> $shipping_address
            );
        $transaction_data = array(
            'transaction_details'   => $transaction_details,
            'item_details'          => $items,
            'customer_details'      => $customer_details,
        );

        try {
            $snap_token = $midtrans->getSnapToken($transaction_data);
            error_log($snap_token);
            return response()->json($snap_token, 201);
        } catch (Exception $e) {
            return $e->getMessage;
        }
    }

    public function store(Request $request) {
        $this->validate($request, [
            'order_id'  => 'required',
            'status'    => 'required',
            'code'      => 'required',
        ]);
        $code = substr(str_shuffle(str_repeat("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", 5)), 0, 5);
        $payment = Transaction::create(['order_id' => $request->order_id,
                                        'status' => 'paid',
                                        'code' => $code]);
        return response()->json($payment, 201);
    }
}
