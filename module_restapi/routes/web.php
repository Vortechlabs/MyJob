<?php

//web

use Illuminate\Support\Facades\Route;
use App\Models\User;
use App\Models\JobVacancy;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/users', function() {
    return response()->json(User::all());
});

Route::get('/job', function() {
    return response()->json(JobVacancy::all());
});




