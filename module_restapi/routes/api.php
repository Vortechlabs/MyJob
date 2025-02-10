<?php

//api

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\SocietiesController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\JobController;
use App\Http\Controllers\API\ValidatorsController;
use App\Http\Controllers\ContactController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ProvinceController;
use App\Http\Controllers\API\RegencyController;

Route::prefix('v1')->group(function() {
    Route::delete('/users/{id}', [UserController::class, 'destroy']);
    Route::get('/users/{id}', [UserController::class, 'show']); 
    Route::put('/users/{id}', [UserController::class, 'update']); 
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);
    Route::post('createjob', [JobController::class,'create']);
    Route::get('/Jobs', [JobController::class, 'index']);
    Route::get('/Jobs/{id}', [JobController::class, 'show']);
    Route::delete('/Jobs/{id}', [JobController::class, 'destroy']);
    Route::get('/JobCategories', [CategoryController::class, 'index']);
    Route::get('/Validators', [ValidatorsController::class, 'index']);
    Route::get('/Societies', [SocietiesController::class, 'index']);
    Route::get('/provinces', [ProvinceController::class, 'index']);
    Route::get('/provinces/{id}/regencies', [RegencyController::class, 'index']);
    Route::get('/contact', [ContactController::class, 'index']);
    Route::get('/contact', [ContactController::class, 'store']);


    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});

