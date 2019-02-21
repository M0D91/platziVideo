import React from 'react';
import './videoPlayerLayout.css';

const VideoPlayerLayout = (props) => (
    <div className='VideoPlayer'>
        {props.children}
    </div>
)

export default VideoPlayerLayout;
