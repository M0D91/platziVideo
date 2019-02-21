import React from 'react';
import './video.css'

const Video = (props) => {
    // console.log('llamado al video layout', props.autoplay);
    return (
        <div className='Video'>
            <video
                src={props.src}
                autoPlay={props.autoplay}
                // controls
            />
        </div>
    )
}


export default Video;