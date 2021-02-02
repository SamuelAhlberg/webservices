import React from 'react';
import SpotifySoundTrack from '../SpotifyTrack/SpotifySoundTrack'
import './SpotifyTrackList.css'

class SpotifySoundTrackList extends React.Component{
    
    render() {
        console.log(this.props.tracks);
        console.log(this.props.tracks.length);
        //if the search result for the track array are less then 1 then no tracks for the movie
        if(this.props.tracks.length<1){
            return "No tracks found";
        }
        return (
            <div className="SoundTrackList">
                {this.props.tracks.map(track => {
                    return <SpotifySoundTrack
                        track={track}
                        key={track.id} />
                    })
                }
            </div>
        );
    }
}
export default SpotifySoundTrackList;