import React, {Component} from 'react';
import Layout from '../components/videoPlayerLayout'
import Video from './video'
import Title from '../components/videoTitle';
import PlayPause from '../components/playPause';
import Timer from '../components/timer';
import TimeFormat from '../../utils/formatTime';
import Controls from '../components/controls';
import ProgressBar from '../components/progressBar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';

class VideoPlayer extends Component {
    state = {
        pause: true,
        duration: 0,
        currentTime: 0,
        loading: false, 
        volume : 0,
        mute : false
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

    handleTimeUpdate = (event) => {
        // console.log(this.video.currentTime)
        this.setState({
            currentTime: this.video.currentTime
        })
    }

    handleProgressChange = event => {
        this.video.currentTime = event.target.value
    }

    handleSeeking = event => {
        this.setState({
            loading: true
        })
        // event.target
    }

    handleSeeked = event => {
        this.setState({
            loading: false
        })
    }

    handleVolumeChange = event => {
        this.video.volume = event.target.value;
    }

    handleMuteToggle = () => {
        const lastVolume = this.video.volume;

        if (this.video.volume != 0){
            this.video.volume = 0;

            this.setState({
                volume: lastVolume,
                mute : true
            })
            
        } else {
            this.video.volume = this.state.volume;
            
            this.setState({
                volume: 0,
                mute: false
            })
        }
    }

    componentDidMount(){
        this.setState({
            pause: (!this.props.autoplay)
        })
    }

    render() {
        // console.log(this.state.currentTime);
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
                        duration = {TimeFormat(this.state.duration)}
                        currentTime = {TimeFormat(this.state.currentTime)}
                    />
                    <ProgressBar 
                        duration = {this.state.duration}
                        current = {this.state.currentTime}
                        target = {this.handleProgressChange}

                    />
                    <Volume 
                        volume = {this.handleVolumeChange}
                        muteToggle = {this.handleMuteToggle}
                        mute = {this.state.mute}
                    />
                </Controls>

                <Spinner 
                    active = {this.state.loading}
                />

                <Video 
                    autoplay={this.props.autoplay}
                    pause={this.state.pause}
                    metaData = {this.handleLoadedMetadata}
                    currentTime = {this.handleTimeUpdate}
                    seeking = {this.handleSeeking}
                    seeked = {this.handleSeeked}
                    src='http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4' 
                /> 
            </Layout>
        )

    }
    
}

export default VideoPlayer;