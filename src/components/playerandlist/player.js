import React from 'react';
import ReactPlayer from 'react-player';
// import "./player.css"

const VideoPlayer = (url) => {
    console.log(url.values, "url")
    const controls = true, width = "100%", height = "100%"

    return (
        <>
            <ReactPlayer
                // ref={playerRef}
                url={url.values.url}
                controls={controls}
                width={width}
                height={height}
                playing={url.values.play}

            ></ReactPlayer>

        </>
    );
};

export default VideoPlayer;
