import React, {Component} from 'react';
import Layout from '../components/videoPlayerLayout'
import Video from './video'
import Title from '../components/videoTitle';
import PlayPause from '../components/playPause';
import Timer from '../components/timer';
import Controls from '../components/controls';

class VideoPlayer extends Component {
    state = {
        pause: true,
        duration: 0
    }

    togglePlay = (event) => {
        this.setState ({
            pause: (!this.state.pause)
        })
    }

    handleLoadedMetadata = (event) => {
        // console.log(event.target);
        this.video = event.target;
        this.setState({
            duration: this.video.duration
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
                <Controls>
                    <PlayPause 
                        pause={this.state.pause}
                        handleClick={this.togglePlay}
                    />
                    <Timer 
                        duration = {this.state.duration}
                    />
                </Controls>
                <Video 
                    autoplay={this.props.autoplay}
                    pause={this.state.pause}
                    metaData = {this.handleLoadedMetadata}
                    src='http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4' 
                /> 
            </Layout>
        )

    }
    
}

export default VideoPlayer;