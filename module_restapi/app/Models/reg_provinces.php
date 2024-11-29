<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class reg_provinces extends Model
{
    protected $fillable = [
        'id',
        'name',
    ];

    public function regencies()
    {
        return $this->hasMany(reg_regencies::class, 'province_id', 'id');
    }

}
