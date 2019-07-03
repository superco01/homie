<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderMeta extends Model
{
    protected $table = 'orders_meta';
    public $timestamps = true;
    protected $guarded = [
        'id',
    ];
    protected $fillable = [
        'order_id',
        'stay_date',
        'status',
    ];

    public function order() {
        return $this->belongsTo(Order::class);
    }
}
