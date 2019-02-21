import React from 'react';
import './video.css'

const Video = (props) => {
    console.log('Holiwi', props.metaData)
    return (
        <div className='Video'>
            <video
                src={props.src}
                autoPlay={props.autoplay}
                pause={props.pause}
                ref={props.setRef}
                onLoadedMetadata={props.metaData}
                // controls
            />
        </div>
    )
}


export default Video;