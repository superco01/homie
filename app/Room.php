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
        'homestay_id',
        'room_number',
        'type',
        'description',
        'photos',
        'price',
        'room_availability',
    ];

    // public function homestay() {
    //     return $this->belongsTo(Homestay::class);
    // }
    public function orders() {
        return $this->hasMany(Order::class);
    }

    public function roomFacilities() {
        return $this->hasMany(RoomFacilities::class);
    }

    public function roomMeta() {
        return $this->hasMany(RoomMeta::class);
    }

    public function homestay() {
        return $this->belongsTo(Homestay::class);
    }
}
