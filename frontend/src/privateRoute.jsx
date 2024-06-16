import { useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { AuthContext } from "./authContext";

export const PrivateRoutes = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();

    if (!isAuthenticated) {
        <Navigate to="/signin" />
        // navigate("/signin", { replace: true })
        console.log("private route control")
        return
    }

    return children;
}