import React, { useEffect, useState } from 'react';
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'; 

function UpdateUser () {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser ] = useState({
        name: '',
        email: '',
        password: '',
        bom_date: '',
        gender: '',
        province_id: '',
        regency_id: '',
        address: '',
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [updating, setUpdating] = useState(false);
    const [provinces, setProvinces] = useState([]);
    const [regencies, setRegencies] = useState([]);

    useEffect(() => {
        const fetchUser  = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/v1/users/${id}`);
                setUser (res.data);
                setLoading(false);
                console.log('User data:', res.data);
            } catch (err) {
                console.error('Error fetching user:', err);
                setError('Failed to fetch user data. Please try again.');
                setLoading(false);
            }
        };

        const fetchProvinces = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/v1/provinces");
                setProvinces(response.data);
                console.log('Provinces:', response.data);
            } catch (error) {
                console.error("Error fetching provinces:", error);
            }
        };

        fetchUser ();
        fetchProvinces();
    }, [id]);

    const handleProvinceChange = async (e) => {
        const provinceId = e.target.value;
        setUser ({ ...user, province_id: provinceId, regency_id: "" });

        if (provinceId) {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/v1/provinces/${provinceId}/regencies`);
                setRegencies(response.data);
                console.log('Regencies:', response.data);
            } catch (error) {
                console.error("Error fetching regencies:", error);
            }
        } else {
            setRegencies([]);
        }
    };

    const handleChange = (e) => {
        setUser ({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUpdating(true);

        try {
            const res = await axios.put(`http://localhost:8000/api/v1/users/${id}`, user);
            console.log('User  updated:', res.data);
            Swal.fire({
                title: 'Success!',
                text: 'User  updated successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                navigate('/UserData');
            });
        } catch (err) {
            console.error('Error updating user:', err);
            setError('Failed to update user. Please try again.');
        } finally {
            setUpdating(false);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className='flex justify-center'>
            <div className='my-20'>
                <div className='mb-16'>
                    <h1 className='text-center text-4xl'>Update User</h1>
                    <p className='text-center'>Update user details</p>
                </div>
                <form  className='mt-10 lg:grid lg:grid-cols-2 gap-2' onSubmit={handleSubmit}>
                    <div>
                        <Label htmlFor="name" value="Name" />
                        <TextInput 
                            id="name" 
                            type="text" 
                            name="name"
                            value={user.name} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div>
                        <Label htmlFor="email" value="Email" />
                        <TextInput 
                            id="email" 
                            type="                            email" 
                            name="email"
                            value={user.email} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div>
                        <Label htmlFor="password" value="Password" />
                        <TextInput 
                            id="password" 
                            type="password" 
                            name="password"
                            placeholder="Leave blank to keep current password"
                            onChange={handleChange} 
                        />
                    </div>
                    <div>
                        <Label htmlFor="confirm_password" value="Confirm Password" />
                        <TextInput 
                            id="confirm_password" 
                            type="password" 
                            name="confirm_password"
                            placeholder="Leave blank to keep current password"
                            onChange={handleChange} 
                        />
                    </div>
                    <div>
                        <Label htmlFor="bom_date" value="Date of Birth" />
                        <TextInput 
                            id="bom_date" 
                            type="date" 
                            name="bom_date"
                            value={user.bom_date} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div>
                        <Label htmlFor="gender" value="Gender" />
                        <select 
                            name="gender" 
                            value={user.gender} 
                            onChange={handleChange} 
                            className='rounded-lg text-sm w-full text-gray-900 border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600'
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div>
                        <Label htmlFor="province_id" value="Province" />
                        <select 
                            name="province_id" 
                            value={user.province_id} 
                            onChange={handleProvinceChange} 
                            className='rounded-lg text-sm w-full text-gray-900 border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600'
                        >
                            <option value="">Select Province</option>
                            {provinces.map((province) => (
                                <option key={province.id} value={province.id}>{province.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <Label htmlFor="regency_id" value="District" />
                        <select 
                            name="regency_id" 
                            value={user.regency_id} 
                            onChange={handleChange} 
                            className='rounded-lg text-sm w-full text-gray-900 border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600'
                            disabled={!regencies.length}
                        >
                            <option value="">Select Regency</option>
                            {regencies.map((regency) => (
                                <option key={regency.id} value={regency.id}>{regency.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className='col-span-2'>
                        <Label htmlFor="address" value="Address" />
                        <Textarea 
                            id="address" 
                            name="address"
                            value={user.address} 
                            onChange={handleChange} 
                            placeholder="Type your address here..." 
                            required 
                        />
                    </div>
                    <Button 
                        type="submit" 
                        disabled={updating} 
                        className="col-span-2 bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700 hover:bg-indigo-700 text-white"
                    >
                        Update
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default UpdateUser ;