import React, { useState } from 'react';
import './CircleNavBar.css'; // Ensure to create and import this CSS file
import { FaBars } from 'react-icons/fa';
import { CgAdd,CgPlayListCheck,CgChevronLeftO } from "react-icons/cg";
import { Link, Navigate, redirect,useNavigate } from 'react-router-dom';



const CircleNavBar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isSpinning, setIsSpinning] = useState(false);
    const navigate = useNavigate();

    const toggleNav = () => {
        if (!isExpanded) {
            setIsSpinning(true);
            setTimeout(() => setIsSpinning(false), 1000); // Stop spinning after 1 second
        }
        setIsExpanded(!isExpanded);
    };

    const setLocal = (nav) =>{
        // localStorage.setItem("login","false")
        // localStorage.setItem("accessToken","")
        // redirect("/login")
        navigate("/"+nav)
        // window.location.reload()

    }
   

    return (
        <div className="circle-nav-wrapper">
            {!(isExpanded)  ? <FaBars className="toggle-icon toggle-button" onClick={toggleNav} />:
            <div className={`circle-nav ${isExpanded ? 'expanded' : 'collapsed'} ${isSpinning ? 'spinning' : ''}`} >
                <ul>
                    <li><CgChevronLeftO className="taglink" onClick={toggleNav}/></li>
                    <li><CgPlayListCheck className="taglink" onClick={()=>setLocal("Remember/tasklist")}/></li>
                    {/* <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li> */}
                    <li><CgAdd className="taglink" onClick={()=>setLocal("Remember/addlist")}/></li>
                </ul>
            </div>}
        </div>
    );
};

export default CircleNavBar;