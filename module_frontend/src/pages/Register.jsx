import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import wl from '../assets/images/wl.png'

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/register", formData);
            Swal.fire("Registration Successful", "You can now log in!", "success");
        } catch (error) {
            if (error.response && error.response.status === 422) {
                // Menampilkan kesalahan validasi
                const errors = error.response.data;
                Swal.fire("Registration Failed", Object.values(errors).flat().join(", "), "error");
            } else {
                Swal.fire("Registration Failed", "An unexpected error occurred.", "error");
            }
        }
    };

    return (
       
        <div className='flex shadow-2xl rounded-2xl'>

        <div >
          <img src={wl} alt="hero-login-image" className='max-h-[32rem] rounded-l-2xl'/>
        </div>
  
        <div className='p-8 flex content-center items-center'>
        <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <input type="password" name="confirm_password" placeholder="Confirm Password" onChange={handleChange} required />
            <button type="submit">Register</button>
        </form>
        <div>
          <h1 className='text-center text-4xl'>Register</h1>
          <p className='text-center'>Enter your email and password to sign in</p>
        </div>
  
        <div className='mt-10'>
  
        <div className='p-2'>
          <label className='text-sm'>Username</label> <br/>
          <input type="text" name='username' placeholder='yourname@domain.com' className='ring-1 p-4 text-sm font-light rounded-xl w-full ring-black'/>
        </div>
  
        <div className='p-2'>
          <label className='text-sm'>Password</label> <br/>
          <input type="password" name='password' placeholder='********' className='ring-1 p-4 text-sm font-light rounded-xl w-full ring-black '/>
        </div>
  
        <div className='p-2 '>
          <button className='w-full bg-indigo-600 hover:ring-4 hover:ring-indigo-400 text-white'>Login</button>
        </div>
        </div>
        </div>
  
        </div>
  
      </div>
    );
};

export default Register;