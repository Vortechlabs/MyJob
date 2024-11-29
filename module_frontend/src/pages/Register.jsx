import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import wl from '../assets/images/wl.png';
import { Link } from "react-router-dom";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
        bom_date: "",
        gender: "",
        province_id: "",
        regency_id: "",
        address: "",
    });

    const [provinces, setProvinces] = useState([]);
    const [regencies, setRegencies] = useState([]);

    useEffect(() => {
        const fetchProvinces = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/provinces");
                setProvinces(response.data);
            } catch (error) {
                console.error("Error fetching provinces:", error);
            }
        };

        fetchProvinces();
    }, []);

    const handleProvinceChange = async (e) => {
        const provinceId = e.target.value;
        setFormData({ ...formData, province_id: provinceId, regency_id: "" });

        if (provinceId) {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/provinces/${provinceId}/regencies`);
                setRegencies(response.data);
            } catch (error) {
                console.error("Error fetching regencies:", error);
            }
        } else {
            setRegencies([]);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userResponse = await axios.post("http://127.0.0.1:8000/api/register", {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                bom_date: formData.bom_date,
                password_confirmation: formData.confirm_password,
                gender: formData.gender,
                address: formData.address,
                province_id: formData.province_id,
                regency_id: formData.regency_id,
            });

            if (userResponse.data.success) {
                Swal.fire("Registration Successful", "You can now log in!", "success");
            } else {
                Swal.fire("Registration Failed", userResponse.data.message, "error");
            }
        } catch (error) {
            if (error.response) {
                console.error("Error response:", error.response.data);
                Swal.fire("Registration Failed", error.response.data.message || "An unexpected error occurred.", "error");
            } else {
                Swal.fire("Registration Failed", "An unexpected error occurred.", "error");
            }
        }
    };

    return (
        <main>
            <div className='flex shadow-2xl rounded-2xl'>
                <div>
                    <img src={wl} alt="hero-login-image" className='max-h-[38rem] rounded-l-2xl hidden lg:block' />
                </div>
                <div className='p-8 flex content-center items-center'>
                    <div>
                        <h1 className='text-center text-4xl'>Register</h1>
                        <p className='text-center'>Enter your email and password to Register</p>
                        <form onSubmit={handleSubmit} className='mt-10 lg:grid lg:grid-cols-2'>
                            <div className='p-2'>
                                <label className='text-sm'>Name</label> <br />
                                <input type="text" name="name" placeholder="Name" onChange={handleChange} required className='p-2 text-sm font-light rounded-xl w-full dark:bg-gray-700 dark:border-gray-600 border-gray-300 focus:ring-indigo-600 focus:border-indigo-600' />
                            </div>
                            <div className='p-2'>
                                <label className='text-sm'>Email</label> <br />
                                <input type="text" name="email" onChange={handleChange} required placeholder='yourname@domain.com' className='p-2 text-sm font-light rounded-xl w-full dark:bg-gray-700 dark:border-gray-600 border-gray-300 focus:ring-indigo-600 focus:border-indigo-600' />
                            </div>
                            <div className='p-2'>
                                <label className='text-sm'>Password</label> <br />
                                <input type="password" name="password" onChange={handleChange} required placeholder='********' className='p-2 text-sm font-light rounded-xl w-full dark:bg-gray-700 dark:border-gray-600 border-gray-300 focus:ring-indigo-600 focus:border-indigo-600' />
                            </div>
                            <div className='p-2'>
                                <label className='text-sm'>Confirm Password</label> <br />
                                <input type="password" name="confirm_password" placeholder="********" onChange={handleChange} required className='p-2 text-sm font-light rounded-xl w-full dark:bg-gray-700 dark:border-gray-600 border-gray-300 focus:ring-indigo-600 focus:border-indigo-600' />
                            </div>
                            
                            <div className='p-2'>
                                <label className='text-sm'>Date of Birth</label> <br />
                                <input type="date" name="bom_date" onChange={handleChange} required className='p-2 text-sm font-light rounded-xl w-full dark:bg-gray-700 dark:border-gray-600 border-gray-300 focus:ring-indigo-600 focus:border-indigo-600' />
                            </div>

                            <div className="p-2">
                                <label className="text-sm">Gender</label> <br />
                                <select name='gender' onChange={handleChange} className='rounded-lg text-sm w-full text-gray-900 border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600'>
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>

                            <div className="p-2">
                                <label className="text-sm">Province</label>
                                <select name='province_id' onChange={handleProvinceChange} className='rounded-lg text-sm w-full text-gray-900 border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600'>
                                    <option value="">Select Province</option>
                                    {provinces.map((province) => (
                                        <option key={province.id} value={province.id}>{province.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="p-2">
                                <label className="text-sm">District</label>
                                <select name='regency_id' onChange={handleChange} className='rounded-lg text-sm w-full text-gray-900 border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600' disabled={!regencies.length}>
                                    <option value="">Select Regency</option>
                                    {regencies.map((regency) => (
                                        <option key={regency.id} value={regency.id}>{regency.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="p-2 col-span-2">
                                <label className="text-sm">Address</label> <br />
                                <textarea name="address" onChange={handleChange} placeholder="Type your address here..." className='rounded-lg text-sm w-full text-gray-900 border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600'>
                                </textarea>
                            </div>

                            <div className='px-2 py-1'>
                                <p className="text-sm">Do you have an account? <span><Link to="/Login">Login</Link></span></p>
                            </div>

                            <div className='p-2'>
                                <button type="submit" className='w-full bg-indigo-600 hover:ring-4 hover:ring-indigo-400 text-white'>Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

// Export the Register component
export default Register;