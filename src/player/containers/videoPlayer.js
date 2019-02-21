import React, {Component} from 'react';
import Layout from '../components/videoPlayerLayout'
import Video from './video'
import Title from '../components/videoTitle';

class VideoPlayer extends Component {
    render() {
        return (
            // <div>
            //     Layout
            // </div>
            <Layout>
                <Title 
                    title={'cosa de titular'}
                />
                <Video 
                    autoplay={true}
                    src='http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4' 
                /> 
            </Layout>
        )

    }
    
}

export default VideoPlayer;