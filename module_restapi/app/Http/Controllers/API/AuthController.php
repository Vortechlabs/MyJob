<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\societies;
use Auth;
use Illuminate\Http\Request;
use App\Models\User;
use Validator;

class AuthController extends Controller
{
    public function register(Request $request) {
        \Log::info('Registration request:', $request->all());
    
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
            'bom_date' => 'required|date',
            'gender' => 'required|string',
            'province_id' => 'required|exists:reg_provinces,id',
            'regency_id' => 'required|exists:reg_regencies,id',
            'address' => 'required|string|max:255',
        ]);
    
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation Error',
                'data' => $validator->errors()
            ]);
        }
    
        try {
            // Create the user
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => bcrypt($request->password),
                'bom_date' => $request->bom_date,
                'gender' => $request->gender,
            ]);
    
            // Create the society entry
            societies::create([
                'id_card_number' => $user->id, // Assuming you want to use the user's ID as the id_card_number
                'password' => bcrypt($request->password), // Consider removing this if you don't want to store passwords in the societies table
                'name' => $request->name,
                'bom_date' => $request->bom_date,
                'gender' => $request->gender,
                'address' => $request->address,
                'province' => $request->province_id, // Store the province_id
                'regencies' => $request->regency_id, // Store the regency_id
            ]);
    
            // Generate and return the token for the user
            $success['token'] = $user->createToken('auth_token')->plainTextToken;
            $success['name'] = $user->name;
    
            return response()->json([
                'success' => true,
                'message'=> 'Success Register',
                'data' => $success
            ]);
        } catch (\Exception $e) {
            \Log::error('Registration error: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Registration Failed',
                'data' => $e->getMessage()
            ]);
        }
    }

    public function login(Request $request){
        \Log::info('Login attempt:', $request->only('email', 'password'));
    
        if (Auth::attempt($request->only('email', 'password'))) {
            $user = Auth::user();
            $society = societies::where('id_card_number', $user->id)->first(); // Assuming id_card_number is unique
    
            // Fetch province and regency names
            $provinceName = ''; // Fetch province name based on society's province ID
            $regencyName = ''; // Fetch regency name based on society's regency ID
    
            if ($society) {
                $province = \DB::table('reg_provinces')->where('id', $society->province)->first();
                $regency = \DB::table('reg_regencies')->where('id', $society->regencies)->first();
    
                $provinceName = $province ? $province->name : 'Unknown';
                $regencyName = $regency ? $regency->name : 'Unknown';
            }
    
            $token = $user->createToken('YourAppName')->plainTextToken;
    
            return response()->json([
                'success' => true,
                'token' => $token,
                'data' => [
                    'name' => $user->name,
                    'email' => $user->email,
                    'id_card_number' => $society->id_card_number,
                    'bom_date' => $society->bom_date,
                    'gender' => $society->gender,
                    'address' => $society->address,
                    'province' => $provinceName,
                    'regencies' => $regencyName,
                ],
            ]);
        }   
        return response()->json(['success' => false, 'message' => 'Invalid credentials'], 401);
    }

    public function update(Request $request, $id)
    {
        // Validasi input
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email,' . $id,
        ]);

        // Temukan pengguna berdasarkan ID
        $user = User::find($id);
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        // Update data pengguna
        $user->name = $request->name;
        $user->email = $request->email;
        $user->save();

        return response()->json($user, 200);
    }
}