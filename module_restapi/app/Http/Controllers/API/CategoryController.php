<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
{
    public function index(){
        $categories = DB::table("job_vacancies")
        ->join("job_categories","job_vacancies.job_categories_id","=","job_categories.id")
        ->select('job_vacancies.*'.'job_categories.job_category')
        ->latest()
        ->paginate(10);
    }
}
