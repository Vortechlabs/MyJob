<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Validators;
use Auth;
use Hash;
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
            \Log::error('Registration error: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Registration Failed',
                'data' => $e->getMessage()
            ]);
        }
    }

    public function login(Request $request) {
        \Log::info('Login attempt:', $request->only('email', 'password'));
    
        $user = User::where('email', $request->email)->first();
    
        if ($user) {
            \Log::info('User  found: ', ['email' => $user->email]);
            \Log::info('Password from request: ', ['password' => $request->password]);
            \Log::info('Hashed password from DB: ', ['hashed_password' => $user->password]);
            \Log::info('User found: ', ['email' => $user->email]);
    
            if (Hash::check($request->password, $user->password)) {
                $validator = Validators::where('user_id', $user->id)->first();
    
                if ($validator) {
                    Auth::login($user);
                    $auth = Auth::user();
                    $success['token'] = $auth->createToken('auth_token')->plainTextToken;
                    $success['name'] = $auth->name;
                    $success['email'] = $auth->email;
                    $success['role'] = $validator->role;
    
                    return response()->json([
                        'success' => true,
                        'message' => 'Login Successful',
                        'data'=> $success
                    ]);
                } else {
                    return response()->json([
                        'success' => false,
                        'message' => 'User not authorized',
                        'data'=> null
                    ]);
                }
            } else {
                \Log::warning('Password mismatch for user: ', ['email' => $user->email]);
                return response()->json([
                    'success' => false,
                    'message' => 'Invalid Email or Password',
                    'data'=> null
                ]);
            }
        } else {
            \Log::warning('User not found: ', ['email' => $request->email]);
            return response()->json([
                'success' => false,
                'message' => 'Invalid Email or Password',
                'data'=> null
            ]);
        }
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email,' . $id,
        ]);

        $user = User::find($id);
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        $user->name = $request->name;
        $user->email = $request->email;
        $user->save();

        return response()->json($user, 200);
    }
}
