<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RoomFacilities extends Model
{
    protected $table = 'rooms_facilities';
    public $timmestamp = true;
    protected $guarded = [
        'id',
    ];
    protected $fillable = [
        'room_id',
        'facility',
    ];
}
