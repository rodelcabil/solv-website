import React, { useState, useRef } from 'react'
import { ControlButton, Controls, MainContainer, Overlay } from './video-component-styles'
import { FaPlay, FaPause } from "react-icons/fa";
import { Waypoint } from 'react-waypoint';
import { useEffect } from 'react';
import { MdFullscreen } from "react-icons/md";

const VideoComponent = ({ videoSrc }) => {

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);


    useEffect(()=>{
        stopVideo();

    },[videoSrc]);

    const onVideoPlay = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            videoRef.current.controls = true;
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            videoRef.current.controls = false;
            setIsPlaying(false);
        }
    }

    const stopVideo = () =>{
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        videoRef.current.controls = false;
        setIsPlaying(false);
    }

    function openFullscreen() {
        if (videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen();
        } else if (videoRef.current.webkitRequestFullscreen) { /* Safari */
            videoRef.current.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            videoRef.current.msRequestFullscreen();
        }
      }


    return (
        <Waypoint onLeave={stopVideo} >
            <MainContainer>
                <Overlay isPlaying={isPlaying}>
                    <ControlButton  onClick={onVideoPlay}>
                        {isPlaying ? <FaPause color='#fff' /> : <FaPlay color='#fff' />}
                    </ControlButton>
                </Overlay>
                <video id="video1" width="900" ref={videoRef} key={videoSrc} onEnded={stopVideo} onChange={()=> alert()}>
                    <source src={videoSrc} type="video/mp4" />
                </video>
                {/* <Controls>
                    <MdFullscreen color="#fff" onClick={openFullscreen} className='full-screen-icon'/>
                </Controls> */}
            </MainContainer>    
        </Waypoint>
    )
}

export default VideoComponent