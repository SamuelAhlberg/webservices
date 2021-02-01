import React from 'react';
import './SpotifyTrack.css'

class SpotifyTrack extends React.Component{

    constructor(props){
        super(props);
        this.addSong = this.addSong.bind(this);
        this.removeSong = this.removeSong.bind(this);

    }

    addSong(){
        this.props.onAdd(this.props.track);
    }
    removeSong(){
        this.props.onRemove(this.props.track);
    }
    showAction(){
        if(this.props.isRemoval){
            return <button className = "Track-action" onClick ={this.removeSong}>-</button>
        }else{
            return <button className= "Track-action" onClick = {this.addSong}>+</button>
        }
     /*   return this.props.isRemoval ? <button onClick = {this.removeSong}
        className={"Track-action"}>-</button> : <button onClick={this.addSong} className={"Track-action"}>+</button>;*/
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
           
            </div>
        );
    }
}
export default SpotifyTrack;