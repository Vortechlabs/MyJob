<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PersonalAccessToken extends Model
{
    protected $fillable = [
        'id',
        'tokenable_id',
        'token',
    ];

    public function pat()
    {
        return $this->belongsTo(User::class, 'tokenable_id', 'id');
    }
}