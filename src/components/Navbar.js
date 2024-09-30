// components/Navbar.jsx
import React from 'react';
import { Link, Navigate, redirect,useNavigate } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    const navigate = useNavigate();

    const setLocal = () =>{
        localStorage.setItem("login","false")
        localStorage.setItem("accessToken","")
        // redirect("/login")
        navigate("/login")
        window.location.reload()

    }
    return (
        <nav className='navbar'>
            {/* <ul> */}
                {/*<Link to="/">Home</Link> */}
                <Link to="anime-cards">Anime Cards</Link>
                <Link to="add-anime">Add Anime</Link>
                <Link to="anime-series">Anime Series List</Link>
                <Link to="add-anime-series">Add Anime Series </Link>
                <button to="/login" onClick={()=>setLocal()} >LogOut </button>

                {/* <Link to="users">users</Link> */}
            {/* </ul> */}
        </nav>
    );
};

export default Navbar;
