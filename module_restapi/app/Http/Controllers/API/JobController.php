<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\JobVacancy;
use Illuminate\Http\Request;

class JobController extends Controller
{
    public function update(Request $request, $id)
{
    $job = JobVacancy::findOrFail($id);
    
    $request->validate([
        'title' => 'required|string|max:255',
        'description' => 'required|string',
        'imageUrl' => 'nullable|url',
    ]);

    $job->title = $request->input('title');
    $job->description = $request->input('description');
    $job->imageUrl = $request->input('imageUrl');
    $job->save();

    return response()->json($job, 200);
}
}
