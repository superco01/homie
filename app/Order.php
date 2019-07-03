<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = 'orders';
    public $timestamps = true;
    protected $guarded = [
        'id',
    ];
    protected $fillable = [
        'room_id',
        'homestay_id',
        'room_number',
        'name',
        'guest',
        'email',
        'phone_number',
        'checkin_date',
        'duration',
        'checkout_date',
        'price_total',
        'transaction_status',
        'approval_code',
        'bank',
        'card_type',
        'finish_redirect_url',
        'fraud_status',
        'gross_amount',
        'masked_card',
        'payment_type',
        'bank_number',
        'instruction_url',
        'transaction_id',
        'transaction_time',
        'order_type',
    ];

    public function orderMeta() {
        return $this->hasMany(OrderMeta::class);
    }
}
