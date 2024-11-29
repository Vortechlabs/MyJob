<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\reg_provinces;
use Illuminate\Http\Request;

class ProvinceController extends Controller
{
    public function index()
    {
        $provinces = reg_provinces::all();

        return response()->json($provinces);
    }
}