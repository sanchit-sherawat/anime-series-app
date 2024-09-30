import React from 'react';
import sanchitImage from '../icons/sanchit.png';
import './pro.css';
import Card from './card';
import DetailsPage from './detail';

function ProfileSide() {
    return (
        <div>
            <div className="procompon">
                <video autoPlay loop style={{ width: '100%', height: 'auto' }} id="myVideo">
                    {/* <source src="https://i.gifer.com/J59.mp4" type="video/mp4"/> */}
                    <source src="https://static.vecteezy.com/system/resources/previews/049/116/882/mp4/abstract-digital-technology-motion-background-seamless-loop-free-video.mp4" type="video/mp4" />

                    {/* https://static.vecteezy.com/system/resources/previews/049/116/882/mp4/abstract-digital-technology-motion-background-seamless-loop-free-video.mp4 */}
                </video>
                <div id='#div1' >
                    <h1 className="sub1">Sanchit Kumar</h1>
                    <p className="sub1">Hello, I am Sanchit Kumar. I am a Software Engineer.I am a self-motivated, hardworking and passionate individual who has experience in working with different technologies including Communication, CSS3, Web Development(ES5/6),Web Design,react js , golang . My strong points include good communication skills, analytical thinking & problem solving ability which will enable me to handle any sort of work pressure within stipulated time. I have developed my analytical and logical skills as well as technical skills during my academic career. Being able to learn new languages as required by the role is one of my most valuable assets for me in the IT industry</p>
                </div>
                <div className="prophoto" >
                    <img src={sanchitImage} alt="Profile of Sanchit Kumar" />
                </div>
            </div>

            <div className="procompon1">
              
                <DetailsPage/>
                {/* <Card/> */}

            </div>


        </div>
    );
}

export default ProfileSide;
