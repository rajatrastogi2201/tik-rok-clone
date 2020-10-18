import React, { useRef, useState } from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import './Video.css';

function Video({url,channel,description,song,likes,messages,shares}) {
    const[play,setPlay] = useState(false);
    const videoRef = useRef(null);
    const onVideoPress = () => {
        if(play) {
            videoRef.current.pause();
            setPlay(false);
        }else {
            videoRef.current.play();
            setPlay(true);
        }
    };

    return (
    <div className="video">
        <video className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src="http://techslides.com/demos/sample-videos/small.mp4">
        </video>
        <VideoFooter 
            channel="rajatrastogi"
            description="Check this out"
            song="No idea"
        />
        <VideoSidebar
            likes={200}
            messages={75}
            shares={10}
        />
        
    </div>
    );
}

export default Video;
