<?php
//JobVacancy
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobVacancy extends Model
{
    protected $fillable = [
        
        'title',
        'description',
        'salary',
        'company',
        'address',
        'job_category_id',
    ];

    public function category()
    {
        return $this->belongsTo(JobCategories::class, 'job_category_id', 'id');
    }
}