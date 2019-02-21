import React, {Component} from 'react';
import VideoLayout from '../components/video';

class Video extends Component{
    // autoplay = {

    // }
    render() {
        console.log(this.props );
        return(
            <VideoLayout 
                src={this.props.src}
                autoplay={this.props.autoplay}
            />
            // <div className='Video'>
            //     <video
            //         src={this.props.src}
            //         autoPlay={this.props.autoplay}
            //         // controls
            //     />
            // </div>
        )
    }
}


export default Video;