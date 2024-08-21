import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import AnimeCardList from '../components/AnimeCardList';
import AnimeCardForm from '../components/AnimeCardForm';
import AnimeSeriesList from '../components/AnimeSeriesList';
import AnimeForm from '../components/AnimeSeriesForm';
import Navbar from '../components/Navbar';
import VideoPlayers from '../components/Series/Series';
import ProtectedRoutes from './protectedRoutes';
import Login from '../components/aouth/Login';

const AppRoutes = () => {
    const [token, setToken] = useState(null);
    

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        setToken(accessToken); // Set token if it exists
    }, []);

    if (!token) {
        // If there's no token, show only the Login component
        // return <Login />;
        return <Routes>  <Route path="*" element={<Navigate to="/login" replace />} /> <Route path='/login'element={<Login/>} ></Route></Routes>
    }

    return (
        <>
            {/* If token exists, show the Navbar and the rest of the app */}
            <Navbar />
            <Routes>
                <Route path="/" element={<Navigate to="/anime-cards" replace />} />
                <Route path="/anime-cards" element={<ProtectedRoutes><AnimeCardList /></ProtectedRoutes>} />
                <Route path="/add-anime" element={<ProtectedRoutes><AnimeCardForm /></ProtectedRoutes>} />
                <Route path="/anime-series" element={<ProtectedRoutes><AnimeSeriesList /></ProtectedRoutes>} />
                <Route path="/add-anime-series" element={<ProtectedRoutes><AnimeForm /></ProtectedRoutes>} />
                <Route path='/anime-series/player' element={<ProtectedRoutes><VideoPlayers /></ProtectedRoutes>} />
                <Route path="*" element={<Navigate to="/" replace />} /> {/* Catch-all route */}
            </Routes>
        </>
    );
};

export default AppRoutes;
