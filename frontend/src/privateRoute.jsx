import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./authContext";

export const PrivateRoutes = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        <Navigate to="/signin" />
        // console.log("private route control")
        return
    }

    return children;
}