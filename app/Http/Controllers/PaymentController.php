<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Transaction;

use App\Veritrans\Midtrans;
use App\Order;
use App\OrderMeta;
use Veritrans_Config;
use Veritrans_Notification;

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

    public function notificationHandler() {
        Veritrans_Config::$isProduction = false;
        Veritrans_Config::$serverKey = 'SB-Mid-server-MhIjQw_PkDBGIxnf9mn2XHIQ';
        $notif = new Veritrans_Notification();

        $transaction = $notif->transaction_status;
        $type = $notif->payment_type;
        $order_id = $notif->order_id;
        $fraud = $notif->fraud_status;

        if ($transaction == 'capture') {
            $orderUpdate = Order::where('id', $order_id)->update(['transaction_status' => $transaction,
                                                                  'order_type' => $type,
                                                                  'fraud_status' => $fraud]);
            $orderUpdateMeta = OrderMeta::where('order_id', $order_id)->update(['status' => $transaction]);
        // For credit card transaction, we need to check whether transaction is challenge by FDS or not
            if ($type == 'credit_card'){
                if($fraud == 'challenge'){
                    // TODO set payment status in merchant's database to 'Challenge by FDS'
                    // TODO merchant should decide whether this transaction is authorized or not in MAP
                    echo "Transaction order_id: " . $order_id ." is challenged by FDS";
                }
                else {
                    // TODO set payment status in merchant's database to 'Success'
                    echo "Transaction order_id: " . $order_id ." successfully captured using " . $type;
                }
            }
        }
        else if ($transaction == 'settlement'){
        // TODO set payment status in merchant's database to 'Settlement'
            $orderUpdate = Order::where('id', $order_id)->update(['transaction_status' => $transaction,
                                                                    'order_type' => $type,
                                                                    'fraud_status' => $fraud]);
            $orderUpdateMeta = OrderMeta::where('order_id', $order_id)->update(['status' => $transaction]);
        echo "Transaction order_id: " . $order_id ." successfully transfered using " . $type;
        }
        else if($transaction == 'pending'){
            $orderUpdate = Order::where('id', $order_id)->update(['transaction_status' => $transaction,
                                                                    'order_type' => $type,
                                                                    'fraud_status' => $fraud]);
            $orderUpdateMeta = OrderMeta::where('order_id', $order_id)->update(['status' => $transaction]);
        // TODO set payment status in merchant's database to 'Pending'
        echo "Waiting customer to finish transaction order_id: " . $order_id . " using " . $type;
        }
        else if ($transaction == 'deny') {
        // TODO set payment status in merchant's database to 'Denied'
        echo "Payment using " . $type . " for transaction order_id: " . $order_id . " is denied.";
        }
        else if ($transaction == 'expire') {
            $orderUpdate = Order::where('id', $order_id)->update(['transaction_status' => $transaction,
                                                                  'order_type' => $type,
                                                                  'fraud_status' => $fraud]);
            $orderUpdateMeta = OrderMeta::where('order_id', $order_id)->update(['status' => $transaction]);
        // TODO set payment status in merchant's database to 'expire'
        echo "Payment using " . $type . " for transaction order_id: " . $order_id . " is expired.";
        }
        else if ($transaction == 'cancel') {
        // TODO set payment status in merchant's database to 'Denied'
        echo "Payment using " . $type . " for transaction order_id: " . $order_id . " is canceled.";
        }
    }

}
