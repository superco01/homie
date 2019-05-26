<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class User extends Controllers {
    public function showName($id) {
        $user = User::find($id);
        error_log("usercontroller");
    
        return $homestay->toJson();
    }
}
