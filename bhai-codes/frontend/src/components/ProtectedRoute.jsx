import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
const ProtectedRoute = ({ children }) => {
    const { currentUser, loading } = useAuth();
    if (loading) {
        return <div>Loading...</div>;
    }
    return currentUser ? children : <Navigate to="/sign-in" />;
};
export default ProtectedRoute;