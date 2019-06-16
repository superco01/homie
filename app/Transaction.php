<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $table = 'transactions';
    public $timestamps = true;
    protected $guarded = [
        'id',
    ];
    protected $fillable = [
        'order_id',
        'status',
        'code',
    ];
}
