<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Validators;
use Illuminate\Http\Request;

class ValidatorsController extends Controller
{
    public function index(){
        $validator = Validators::with('Validators')->latest()->paginate();
        return response()->json($validator);
    }
}

