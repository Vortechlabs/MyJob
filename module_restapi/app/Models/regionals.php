<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class regionals extends Model
{
    protected $fillable = [
        'id',
        'province',
        'regencies',
    ];
}
