import React, { createContext, useContext, useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null); 

    useEffect(() => {
        const token = localStorage.getItem('token'); 
        const storedUserData = localStorage.getItem('userData'); // Get user data from local storage

        if (token) {
            validateToken(token);
        }

        if (storedUserData) {
            setUserData(JSON.parse(storedUserData)); // Set user data from local storage
            setIsLoggedIn(true); // Set logged in state
        }
    }, []);

    const validateToken = async (token) => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/v1/Societies', {
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
    
            const contentType = response.headers.get("content-type");
            let data;
    
            if (contentType && contentType.includes("application/json")) {
                data = await response.json();
            } else {
                throw new Error("Response is not JSON");
            }
    
            console.log("API Response:", data); 
    
            if (response.ok) {
                setIsLoggedIn(true);
                setUserData(data.data[0]); 
            } else {
                setIsLoggedIn(false);
                setUserData(null);
                localStorage.removeItem('userData'); 
                Swal.fire({
                    title: 'Invalid Token',
                    text: data.message || 'Token is invalid or expired.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
                navigate('/Login');
            }
        } catch (error) {
            console.error("Error validating token:", error);
            Swal.fire({
                title: 'Error',
                text: 'An error occurred while validating the token.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            navigate('/Login');
        }
    };

    const login = (userData) => {
        setIsLoggedIn(true);
        setUserData(userData);
        localStorage.setItem('token', userData.token); 
        localStorage.setItem('userData', JSON.stringify(userData)); 
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUserData(null); 
        localStorage.removeItem('token'); 
        Swal.fire({
            title: 'Logout Success',
            text: 'You have been logged out successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, userData, login, logout, setIsLoggedIn, setUserData }}>
            {children}
        </AuthContext.Provider>
    );
};