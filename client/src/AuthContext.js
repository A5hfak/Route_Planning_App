import React, { createContext, useContext, useState, useEffect } from 'react';

// Create AuthContext
const AuthContext = createContext();

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);

// AuthProvider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Check local storage on initial load
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser)); // Parse the user info from local storage
        }
    }, []);

    const login = (userInfo) => {
        setUser(userInfo);
        localStorage.setItem('user', JSON.stringify(userInfo)); // Store user in local storage
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user'); // Remove user from local storage
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
