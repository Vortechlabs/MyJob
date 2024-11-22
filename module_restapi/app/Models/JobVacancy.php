<?php
//JobVacancy
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class JobVacancy extends Model
{
    
    public $fillable =  [
        'title',
        'description',
        'salary',
        'company',
        'address',
        'job_category_id',
    ];
    
    

}