<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class reg_regencies extends Model
{
    protected $fillable = [
        'id',
        'name',
        'province_id',
    ];

    public function regencies()
    {
        return $this->hasMany(reg_regencies::class, 'province_id', 'id');
    }

}
