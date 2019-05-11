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
        'title',
        'description',
        'photo',
        'price',
        'room_availability'
    ];
}
