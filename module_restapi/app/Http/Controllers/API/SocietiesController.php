<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\societies;
use Illuminate\Http\Request;

class SocietiesController extends Controller
{
    public function index(){
        $societies = societies::latest()->get(); 
        \Log::info('Societies data:', $societies->toArray()); 
        return response()->json(['data' => $societies]); 
    }

}
