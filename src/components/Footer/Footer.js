import React, { Component } from 'react';

import './Footer.css';

class footer extends Component {

    constructor(props){
        super(props);
        this.state = {
            playing: false,
            isPlayed: false,
            url: null
        }
        this.audio.src = this.props.url;
    }

    audio = new Audio(this.props.url);
    
    componentDidMount(){
        this.setState({url: this.props.url});
    }  

    playSongHandler = () => {
        if(this.state.url !== this.props.url){
            this.setState({ isPlayed: false, url: this.props.url })
            this.audio.src = this.props.url;
        }
        this.setState({ playing: true, isPlayed: true});
        
        if(this.state.url !== this.props.url)
            this.audio.src = this.props.url
        
        this.audio.play();
    }

    pauseSongHandler = () => {
        this.setState({ playing:false });
        this.audio.pause();
    }

    render() {


        return (
            <div>
                <button 
                    onClick={!this.state.playing ? this.playSongHandler : this.pauseSongHandler}>{this.state.playing ? 'Pause' : 'Play'}</button>

            </div>
        );
    }
}

export default footer;
/*

<div className='container'>Place sticky footer content here.</div>
 <footer className='footer mt-auto py-3 bg-dark text-white'>
                <audio src ={this.props.url} />
            </footer>
*/