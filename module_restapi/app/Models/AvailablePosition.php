<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AvailablePosition extends Model
{
    protected $fillable = [
        'id',
        'job_vacancy_id',
        'position',
        'capacity',
        'apply_capacity',
    ];
}
