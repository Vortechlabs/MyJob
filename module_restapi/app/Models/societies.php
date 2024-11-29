<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class societies extends Model
{
    protected $fillable = [
        'id',
        'id_card_number',
        'password',
        'name',
        'bom_date',
        'gender',
        'address',
        'province',
        'regencies',
    ];

    public function Societies(){
        return $this->belongsTo(User::class, 'id_card_number', 'id');
    }
}
