// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav>
            {/* <ul> */}
                {/*<Link to="/">Home</Link> */}
                <Link to="/anime-cards">Anime Cards</Link>
                <Link to="/add-anime">Add Anime</Link>
                <Link to="/anime-series">Anime Series List</Link>
                <Link to="/add-anime-series">Add Anime Series </Link>
                {/* <Link to="users">users</Link> */}
            {/* </ul> */}
        </nav>
    );
};

export default Navbar;
