<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\JobVacancy;
use Illuminate\Http\Request;
use DB;
use Validator;

class JobController extends Controller
{
    public function index() {
        $jobs = JobVacancy::with('category')->latest()->paginate();
        return response()->json($jobs);
    }

    public function create(Request $request)
    {
        $validatedData = $request->validate([
            'foto' =>  'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'salary' => 'required|numeric',
            'company' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'job_category_id' => 'required|integer|exists:job_categories,id',
        ]);
    
        $jobVacancy = JobVacancy::create($validatedData);
        if($request->hasFile('foto')) {
            $request->file('foto')->move('fotocompany/', $request->file('foto')->getClientOriginalName());
            $jobVacancy->foto = $request->file('foto')->getClientOriginalName();
            $jobVacancy->save();
        }
    
        return response()->json(['success' => true, 'data' => $jobVacancy], 201);
    }
    
    /*public function add(Request $request){
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'description' => 'required',
            'company' => 'required',
            'salary' => 'required',
            'job_category_id' => 'required',
            'address' => 'required',
        ]);

        if ($validator->fails()){
            return response()->json([
                'success' => false,
                'message' =>'Validation Error',
                'data' => $validator->errors()
            ]);
        }

        try{
            $input = $request->all();

            $job = JobVacancy::create($input);

            $success['title'] = $job->title;

            return  response()->json([
                'success' => true,
                'message' => 'Success add Job',
                'data' => $success
            ]);
        }catch(\Exception $e){
            return response()->json([
                'success' => false,
                'message' => 'Add Job Failed',
                'data'=> $e->getMessage()
            ]);
        }
    }*/

    
    /*public function index(){
        $job = DB::table("job_vacancies")
        ->join("job_categories","job_vacancies.job_categories_id","=","job_categories.id")
        ->select('job_vacancies.*'.'job_categories.job_category')
        ->latest()
        ->paginate(10);
    }*/

}
