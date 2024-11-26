import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import wl from '../assets/images/wl.png'
import { Link } from "react-router-dom";

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
          
          if (response.data.success) {
              console.log(response.data);
              Swal.fire("Registration Successful", "You can now log in!", "success");
          } else {
            console.log(response.data.data);
              Swal.fire("Registration Failed", response.data.message, "error");
          }
      } catch (error) {
          if (error.response) {
            console.error("Error response:", error.response.data);
              if (error.response.status === 422) {
                  const errors = error.response.data.data; 
                  if (errors.email) {
                      Swal.fire("Registration Failed", "Email is already in use. Please use a different email.", "error");
                  } else {
                      Swal.fire("Registration Failed", Object.values(errors).flat().join(", "), "error");
                  }
              } else {
                  Swal.fire("Registration Failed", error.response.data.message || "An unexpected error occurred.", "error");
              }
          } else {
              Swal.fire("Registration Failed", "An unexpected error occurred.", "error");
          }
      }
  };

    return (
       <main>
        <div className='flex shadow-2xl rounded-2xl'>

        <div >
          <img src={wl} alt="hero-login-image" className='max-h-[38rem] rounded-l-2xl hidden lg:block'/>
        </div>
  
        <div className='p-8 flex content-center items-center'>
        <div>
        <div>
          <h1 className='text-center text-4xl'>Register</h1>
          <p className='text-center'>Enter your email and password to Register</p>
        </div>
  
        <form onSubmit={handleSubmit} className='mt-10'>

        <div className='p-2'>
          <label className='text-sm'>Name</label> <br/>
          <input type="text" name="name" placeholder="Name" onChange={handleChange} required className='ring-1 p-2 text-sm font-light rounded-xl w-full ring-black'/>
        </div>
  
        <div className='p-2'>
          <label className='text-sm'>Email</label> <br/>
          <input type="text" name="email"  onChange={handleChange} required  placeholder='yourname@domain.com' className='ring-1 p-2 text-sm font-light rounded-xl w-full ring-black'/>
        </div>
  
        <div className='p-2'>
          <label className='text-sm'>Password</label> <br/>
          <input type="password" name="password"  onChange={handleChange} required placeholder='********' className='ring-1 p-2 text-sm font-light rounded-xl w-full ring-black '/>
        </div>

        <div className='p-2'>
          <label className='text-sm'>Cofirm Password</label> <br/>
          <input type="password"  name="confirm_password" placeholder="********" onChange={handleChange} required  className='ring-1 p-2 text-sm font-light rounded-xl w-full ring-black '/>
        </div>

        <div  className='px-2 py-1'>
          <p className="text-sm">Do you have an account? <span><Link to="/Login">Login</Link></span></p>
        </div>
  
        <div className='p-2 '>
          <button type="submit" className='w-full bg-indigo-600 hover:ring-4 hover:ring-indigo-400 text-white'>Register</button>
        </div>
        </form>
        </div>
  
        </div>
  
      </div>
      </main>
    );
};

export default Register;