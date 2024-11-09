import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Assuming you have an AuthContext

const PrivateRoute = ({ children }) => {
    const { user } = useAuth(); // Assuming user is fetched from context

    return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
