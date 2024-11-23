import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom"; 
import wl from '../assets/images/wl.png';
import { useAuth } from '../components/AuthContext'; 

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate(); 
    const { setIsLoggedIn } = useAuth(); 

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/login", formData);
            
            if (response.data.success) {
                console.log(formData)
                localStorage.setItem('token', response.data.token);
                setIsLoggedIn(true);
                Swal.fire("Login Successful", "Welcome back!", "success").then(() => {
                    navigate("/"); 
                });
            } else {
                Swal.fire("Login Failed", /*response.data.message*/ "Id_card Number or Password Incorrect", "error");
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 401) {
                    Swal.fire("Login Failed", /*"Invalid Email or Password"*/"Id_card Number or Password Incorrect", "error");
                } else {
                    Swal.fire("Login Failed", /*error.response.data.message*/ "Id_card Number or Password Incorrect" || "An unexpected error occurred.", "error");
                }
            } else {
                Swal.fire("Login Failed", "An unexpected error occurred.", "error");
            }
        }
    };

    return (
        <div className='flex shadow-2xl rounded-2xl'>
            <div>
                <img src={wl} alt="hero-login-image" className='max-h-[38rem] rounded-l-2xl hidden lg:block'/>
            </div>
            <div className='p-8  content-center items-center'>
                <div>
                <h1 className='text-center text-4xl'>Login</h1>
                    <p className='text-center'>Enter your email and password to Login</p>
                </div>

                <form onSubmit={handleSubmit} className='mt-10'>
                    <div className='p-2'>
                        <label className='text-sm'>Email</label> <br/>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            required
                            placeholder='yourname@domain.com'
                            className='ring-1 p-2 text-black text-sm font-light rounded-xl w-full ring-black'
                        />
                    </div>

                    <div className='p-2'>
                        <label className='text-sm'>Password</label> <br/>
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            required
                            placeholder='********'
                            className='ring-1 p-2 text-black text-sm font-light rounded-xl w-full ring-black'
                        />
                    </div>

                    <div className='p-2'>
                        <button type="submit" className='w-full bg-indigo-600 hover:ring-4 hover:ring-indigo-400 text-white'>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;