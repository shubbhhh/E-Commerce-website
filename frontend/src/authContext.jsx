import React, { useState, useEffect, createContext, Children } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useAuth(setIsAuthenticated)

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
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated ,login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};