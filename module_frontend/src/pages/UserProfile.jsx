import React from 'react';
import { useAuth } from '../components/AuthContext';

const UserProfile = () => {
    const { userData } = useAuth(); 

    return (
        <div>
            {userData ? (
                <div>
                    <h1>Welcome, {userData.name}</h1> 
                    <p>Name: {userData.validators.name}</p>
                    <p>Role: {userData.role}</p> 
                    <p>Email: {userData.validators.email}</p> 
                </div>
            ) : (
                <p>Please log in to see your profile.</p>
            )}
        </div>
    );
};

export default UserProfile;