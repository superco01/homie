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
        'status',
        'payment',
        'bank_number',
        'instruction_url',
        'transaction_id',
        'order_type',
    ];

    public function transactions() {
        return $this->hasOne(Transaction::class);
    }
}
