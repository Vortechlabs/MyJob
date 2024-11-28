<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Validators extends Model
{
    protected $fillable = [
        'id',
        'user_id',
        'role',
        'name',
    ];

    public function Validators(){
        
        return $this-> belongsTo(User::class,'user_id', 'id');
    }
}
