<?php
//JobVacancy
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class JobVacancy extends Model
{
    
    
    public function index(){
        $job = DB::table("job_vacancies")
        ->join("job_categories","job_vacancies.job_categories_id","=","job_categories.id")
        ->select('job_vacancies.*'.'job_categories.job_category')
        ->latest()
        ->paginate(10);
    }

}