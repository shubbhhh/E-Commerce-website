import React, { useState, useEffect, createContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const location = useLocation();
    const navigate  = useNavigate();
    const [userData, setUserData] = useState(null);
    
    useEffect(() => {
        async function checkAuth() {
            try {
                const response = await axios.get("http://localhost:3000/brandname/profile/", {
                    headers: {
                        authorization: localStorage.getItem("token")
                    }
                });
                if (response.status === 200) {
                    setUserData(response.data)
                    setIsAuthenticated(true);
                }
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    navigate("/signin", { replace: true })
                }
            }
        };
        
        // Only check authentication if the path starts with '/profile'
        if (location.pathname.startsWith('/profile')) {
            checkAuth();
        }
    }, [location.pathname, setIsAuthenticated])

    const login = () => {
        if (localStorage.token) {
            setIsAuthenticated(true);
            return
        } else {
            <Navigate to="/signin" replace />
        }
    }

    const logout = () => {
        localStorage.removeItem(token);
        <Navigate to="/signin" replace />
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, userData, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};