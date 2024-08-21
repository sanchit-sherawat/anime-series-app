import React from 'react';
import { Navigate ,useNavigate} from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
    const navigate = useNavigate()
    let accessToken = localStorage.getItem("accessToken");

    // Check if the token exists
    if (accessToken) {
        // If the token exists, render the children components
        return children;
    } else {

        // If the token doesn't exist, redirect to the login page
        // return <Navigate to="/login" />;
        navigate("/login")

    }
    // alert("sdfg")

};

export default ProtectedRoutes;
