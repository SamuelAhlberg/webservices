import React from 'react';
import './SpotifyTrack.css'

class SpotifyTrack extends React.Component{

    constructor(props){
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);

    }

    addTrack(){
        this.props.onAdd(this.props.track);
    }
    removeTrack(){
        this.props.onRemove(this.props.track);
    }
    renderAction(){
        if(this.props.isRemoval){
            return <button className = "Track-action" onClick ={this.removeTrack}>-</button>
        }else{
            return <button className= "Track-action" onClick = {this.addTrack}>+</button>
        }
     /*   return this.props.isRemoval ? <button onClick = {this.removeTrack}
        className={"Track-action"}>-</button> : <button onClick={this.addTrack} className={"Track-action"}>+</button>;*/
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                {this.renderAction()}
            </div>
        );
    }
}
export default SpotifyTrack;