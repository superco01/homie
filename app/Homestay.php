<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Homestay extends Model
{
    protected $table = 'homestays';
    public $timestamps = true;
    protected $guarded = [
        'id',
    ];
    protected $fillable = [
        'user_id',
        'name',
        'location',
        'address',
        'facilities',
        'number_of_rooms',
        'photo1',
        'photo2',
        'description',
    ];

    // public function homestayFacilities() {
    //     return $this->hasMany(HomestayFacilities::class);
    // }

    public function rooms() {
        return $this->hasMany(Room::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
}
