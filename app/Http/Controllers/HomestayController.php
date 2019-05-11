<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Homestay;

class HomestayController extends Controller
{
    public function index() {
        $homestays = Homestay::get();
        
        return $homestays->toJson();
    }
}
