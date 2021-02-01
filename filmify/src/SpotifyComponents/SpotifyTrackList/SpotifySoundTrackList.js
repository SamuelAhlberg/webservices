import React from 'react';
import SpotifySoundTrack from '../SpotifyTrack/SpotifySoundTrack'
import './SpotifyTrackList.css'

class SpotifySoundTrackList extends React.Component{
    render() {
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