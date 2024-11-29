<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\reg_regencies; 
use Illuminate\Http\Request;

class RegencyController extends Controller
{
    public function index($provinceId)
    {
        $regencies = reg_regencies::where('province_id', $provinceId)->get();

        return response()->json($regencies);
    }
}