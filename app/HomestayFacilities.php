<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HomestayFacilities extends Model
{
    protected $table = 'homestays_facilities';
    public $timmestamp = true;
    protected $guarded = [
        'id',
    ];
    protected $fillable = [
        'homestay_id',
        'facility',
    ];
}
