<?php
//JobVacancy
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobVacancy extends Model
{
    protected $fillable = [
        'description',
        'salary',
        'company',
        'address',
        'job_category_id',
        'foto'
    ];

    public function category()
    {

        return $this->belongsTo(JobCategories::class, 'job_category_id', 'id');
    }

    // In JobVacancy.php model
    public function availablePositions()
    {
        return $this->hasMany(AvailablePosition::class);
    }
}