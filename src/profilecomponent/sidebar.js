// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import contact from "../icons/contact.png"
import home from "../icons/hometra.png"
import tech from "../icons/techtra.png"
import project from "../icons/projecttra.png"
// import "./Navbar.css"

const SideBar = () => {
    // const navigate = useNavigate();

    // const setLocal = () =>{
    //     localStorage.setItem("login","false")
    //     localStorage.setItem("accessToken","")
    //     // redirect("/login")
    //     navigate("/login")
    //     window.location.reload()

    // }
    return (
        <div className='sidebar'>
            {/* <ul> */}
                {/*<Link to="/">Home</Link> */}
                <Link to="anime/anime-cards" title='home'><img src={home} alt='home'/></Link>
                <Link to="anime/add-anime" title='technology'><img src={tech} alt='tech'/></Link>
                <Link to="anime/anime-series" title='Projects'><img src={project} alt='project'/></Link>
                <Link to="anime/add-anime-series" title='Contact Info'><img src={contact} alt='contact' /></Link>
                {/* <button to="/login" onClick={()=>setLocal()} >LogOut </button> */}

                {/* <Link to="users">users</Link> */}
            {/* </ul> */}
        </div>
    );
};

export default SideBar;
