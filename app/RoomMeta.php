<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RoomMeta extends Model
{
    protected $table = 'rooms_meta';
    public $timmestamp = true;
    protected $guarded = [
        'id',
    ];
    protected $fillable = [
        'homestay_id',
        'room_id',
        'day',
        'price',
    ];
}
