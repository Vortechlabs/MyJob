import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token'); 
        if (token) {
            setIsLoggedIn(true); 
        }
    }, []);

    const login = () => {
        setIsLoggedIn(true);
    };

    const logout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('token'); 
        Swal.fire({
            title: 'Logout Success',
            text: 'You have been logged out successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
        })
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};