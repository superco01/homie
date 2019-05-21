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
        'id_user',
        'name',
        'location',
        'address',
        'facilities',
        'number_of_rooms',
    ];

    public function rooms() {
        return $this-hasMany(Rooms::class);
    }
}
