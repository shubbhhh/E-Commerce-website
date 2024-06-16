import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export function useAuth(setIsAuthenticated) {
    const location = useLocation();
    const navigate  = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                console.log("control in check auth")
                const response = await axios.get("http://localhost:3000/brandname/profile/", {
                    headers: {
                        authorization: localStorage.getItem("token")
                    }
                });
                if (response.status === 200) {
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
    }, [location.pathname, navigate, setIsAuthenticated]);


}