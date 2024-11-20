<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobVacancy extends Model
{
    // Specify the table associated with the model
    protected $table = 'job_vacancies';

    // Define the fillable attributes for mass assignment
    protected $fillable = [
        'title',
        'description',
        'company',
        'address',
        'salary',
    ];

}