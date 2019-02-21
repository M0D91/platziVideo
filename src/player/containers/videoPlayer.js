import React, {Component} from 'react';
import Layout from '../components/videoPlayerLayout'
import Video from './video'
import Title from '../components/videoTitle';
import PlayPause from '../components/playPause';

class VideoPlayer extends Component {
    state = {
        pause: true,
    }

    togglePlay = (event) => {
        this.setState ({
            pause: (!this.state.pause)
        })
    }

    componentDidMount(){
        this.setState({
            // la siguiente linea es una especie de if super escueto
            pause: (!this.props.autoplay)
        })
    }

    render() {
        return (
            <Layout>
                <Title 
                    title={'cosa de titular'}
                />
                <PlayPause 
                    pause={this.state.pause}
                    handleClick={this.togglePlay}
                />
                <Video 
                    autoplay={this.props.autoplay}
                    pause={this.state.pause}
                    src='http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4' 
                /> 
            </Layout>
        )

    }
    
}

export default VideoPlayer;