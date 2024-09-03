import React from 'react';
import sanchitImage from '../icons/sanchit.png';
import './pro.css';

function ProfileSide() {
    return (
        <div className="procompon">
            <div>
                <h1>Sanchit Kumar</h1>
                <p>Hello, I am Sanchit Kumar. I am a Software Engineer.I am a self-motivated, hardworking and passionate individual who has experience in working with different technologies including Communication, CSS3, Web Development(ES5/6),Web Design,react js , golang . My strong points include good communication skills, analytical thinking & problem solving ability which will enable me to handle any sort of work pressure within stipulated time. I have developed my analytical and logical skills as well as technical skills during my academic career. Being able to learn new languages as required by the role is one of my most valuable assets for me in the IT industry</p>
            </div>
            <div className="prophoto">
                <img src={sanchitImage} alt="Profile of Sanchit Kumar"/>    
            </div>
        </div>
    );
}

export default ProfileSide;
