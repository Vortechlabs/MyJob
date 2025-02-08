<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\AvailablePosition;
use App\Models\JobVacancy;
use Illuminate\Http\Request;
use DB;
use Validator;

class  JobController extends Controller
{
    public function index() {
        $jobs = JobVacancy::with(['category', 'availablePositions'])->latest()->paginate();
        return response()->json($jobs);
    }

    public function show($id)
    {
        \Log::info("Fetching job with ID: $id");
        $jobshow = JobVacancy::with(['category', 'availablePositions'])->find($id);
        
        if (!$jobshow) {
            \Log::warning("Job with ID: $id not found");
            return response()->json(['message' => 'Job not found'], 404);
        }
        
        return response()->json($jobshow);
    }

    public function create(Request $request)
    {
        $validatedData = $request->validate([
            'foto' =>  'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'description' => 'required|string',
            'salary' => 'required|numeric',
            'company' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'job_category_id' => 'required|integer|exists:job_categories,id',
            'position' => 'required|string|max:255', 
            'capacity' => 'required|integer',
        ]);
    
        $jobVacancy = JobVacancy::create($validatedData);
        
        if ($request->hasFile('foto')) {
            $request->file('foto')->move('fotocompany/', $request->file('foto')->getClientOriginalName());
            $jobVacancy->foto = $request->file('foto')->getClientOriginalName();
            $jobVacancy->save();
        }
    
        $availablePosition = new AvailablePosition([
            'job_vacancy_id' => $jobVacancy->id, 
            'position' => $request->input('position'), 
            'capacity' => $request->input('capacity'), 
            'apply_capacity' => $request->input('capacity'),
        ]);
    
        $availablePosition->save(); 
    
        return response()->json(['success' => true, 'data' => $jobVacancy], 201);
    }

    public function destroy($id)
    {
        \Log::info("Attempting to delete job with ID: $id");
        
        $jobVacancy = JobVacancy::find($id);
        if (!$jobVacancy) {
            \Log::warning("Job with ID: $id not found");
            return response()->json(['message' => 'Job not found'], 404);
        }
    
        try {
            // Delete related available positions
            $jobVacancy->availablePositions()->delete(); // Assuming you have a relationship defined
    
            // Now delete the job vacancy
            $jobVacancy->delete();
            \Log::info("Job with ID: $id deleted successfully");
            return response()->json(['message' => 'Job deleted successfully'], 200);
        } catch (\Exception $e) {
            \Log::error("Error deleting job with ID: $id - " . $e->getMessage());
            return response()->json(['message' => 'Error deleting job'], 500);
        }
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
