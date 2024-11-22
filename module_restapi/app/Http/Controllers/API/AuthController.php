<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Auth;
use Illuminate\Http\Request;
use App\Models\User;
use Validator;

class AuthController extends Controller
{
    public function register(Request $request){
        \Log::info('Registration request:', $request->all());
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required',
            'confirm_password' => 'required|same:password'
        ]);

        if ($validator->fails()){
            return response()->json([
                'success'=> false,
                'message' => 'Validation Error',
                'data' => $validator->errors()
            ]);
        }

        try {
            $input = $request->all();
            $input['password'] = bcrypt($request->input('password'));
            
            $user = User::create($input);

            $success['token'] = $user->createToken('auth_token')->plainTextToken;
            $success['name'] = $user->name;

            return response()->json([
                'success' => true,
                'message'=> 'Success Register',
                'data' => $success
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Registration Failed',
                'data' => $e->getMessage()
            ]);
        }
    }

    public function login(Request $request){
        \Log::info('Login attempt:', $request->only('email', 'password'));

        if (Auth::attempt(['email'=> $request->email,'password'=> $request->password])){
            $auth = Auth::user();
            $success['token'] = $auth->createToken('auth_token')->plainTextToken;
            $success['name'] = $auth->name;
            $success['email'] = $auth->email;

            return response()->json([
                'success' => true,
                'message' => 'Login Successful',
                'data'=> $success
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Invalid Email or Password',
                'data'=> null
            ]);
        }
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
