// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ element }) => {
  const { setIsLoggedIn } = useAuth();

  return setIsLoggedIn ? element : <Navigate to="/Login" />;
};

export default ProtectedRoute;