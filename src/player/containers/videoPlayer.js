import React, {Component} from 'react';
import Layout from '../components/videoPlayerLayout'

class VideoPlayer extends Component {
    render() {
        return (
            // <div>
            //     Layout
            // </div>
            <Layout>
                <video 
                    src='http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'
                    autoPlay
                    controls/>
            </Layout>
        )

    }
    
}

export default VideoPlayer;