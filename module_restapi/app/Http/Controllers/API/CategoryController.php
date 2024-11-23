<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\JobCategories;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
{
    public function index(){
        
        $category = JobCategories::all();
    
        return response()->json(['success' => true, 'data' => $category], 201);
    }
}
