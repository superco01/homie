<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    protected $table = 'rooms';
    public $timestamps = true;
    protected $guarded = [
        'id',
    ];
    protected $fillable = [
        'id_homestay',
        'title',
        'description',
        'photos',
        'price',
        'room_availability',
    ];
}
