<?php

//web

use App\Http\Controllers\API\JobController;
use App\Models\Validators;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use App\Models\JobVacancy;

Route::get('/Jobs', [JobController::class, 'index']);

Route::get('/', function () {
    return view('welcome');
});

Route::get('/users', function() {
    return response()->json(User::all());
});

Route::get('/job', function() {
    return response()->json(JobVacancy::all());
});

Route::get('/validators', function() {
    return response()->json(Validators::all());
});

