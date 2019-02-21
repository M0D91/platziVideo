import React from 'react';
import './video.css'

const Video = (props) => {
    return (
        <div className='Video'>
            <video
                src={props.src}
                autoPlay={props.autoplay}
                pause={props.pause}
                ref={props.setRef}
                // controls
            />
        </div>
    )
}


export default Video;