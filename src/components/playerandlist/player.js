import React from 'react';
import ReactPlayer from 'react-player';
// import "./player.css"

const VideoPlayer = (url) => {
    console.log(url.values, "url")
    const controls = true, width = "100%", height = "100%"

    return (
        <div className='videoplayer' >
            <ReactPlayer
                autoPlay
                // ref={playerRef}
                url={url.values.url}
                controls={controls}
                width={width}
                height={"auto"}
            
                // light={url.values.url}
                // playing={url.values.play}
                playing={true}

            ></ReactPlayer>

        </div>
    );
};

export default VideoPlayer;
