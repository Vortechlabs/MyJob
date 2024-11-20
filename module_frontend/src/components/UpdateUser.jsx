import React, { useEffect, useState } from 'react';
import { Button, Label, TextInput } from "flowbite-react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert2

function UpdateUser () {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser ] = useState({ name: '', email: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [updating, setUpdating] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/${id}`)
            .then(res => {
                setUser (res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching user:', err);
                setError('Failed to fetch user data. Please try again.');
                setLoading(false);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUpdating(true);

        axios.put(`http://localhost:8000/api/users/${id}`, user)
            .then(res => {
                console.log('User  updated:', res.data);
                Swal.fire({
                    title: 'Success!',
                    text: 'User  updated successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    navigate('/users'); // Redirect to the users page
                });
                setUpdating(false);
            })
            .catch(err => {
                console.error('Error updating user:', err);
                setError('Failed to update user. Please try again.');
                setUpdating(false);
            });
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email" value="Email" />
                </div>
                <TextInput 
                    id="email" 
                    type="email" 
                    value={user.email} 
                    onChange={(e) => setUser ({ ...user, email: e.target.value })} 
                    required 
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="name" value="Name" />
                </div>
                <TextInput 
                    id="name" 
                    type="text" 
                    value={user.name} 
                    onChange={(e) => setUser ({ ...user, name: e.target.value })} 
                    required 
                />
            </div>
            <Button 
                type="submit" 
                disabled={updating} 
                className="bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700 hover:bg-indigo-700 text-white"
            >
                Update
            </Button>
        </form>
    );
}

export default UpdateUser ;