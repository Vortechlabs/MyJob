<?php

//api

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\JobController;
use App\Http\Controllers\API\ValidatorsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::delete('/users/{id}', [UserController::class, 'destroy']);
Route::get('/users/{id}', [UserController::class, 'show']); 
Route::put('/users/{id}', [UserController::class, 'update']); 
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::post('createjob', [JobController::class,'create']);
Route::get('/Jobs', [JobController::class, 'index']);
Route::get('/Jobs/{id}', [JobController::class, 'show']);
Route::get('/Jobs/{id}', [JobController::class, 'show']);
Route::get('/JobCategories', [CategoryController::class, 'index']);
Route::get('/Validators', [ValidatorsController::class, 'index']);


Route::get('/user', function (Request $request) {
    return $request->user();
});

