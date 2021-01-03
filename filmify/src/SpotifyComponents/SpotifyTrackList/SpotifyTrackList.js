import React from 'react';
import SpotifyTrack from '../SpotifyTrack/SpotifyTrack'
import './SpotifyTrackList.css'

class SpotifyTrackList extends React.Component{
    render() {
        return (
            <div className="TrackList">
                {this.props.tracks.map(track => {
                    return <SpotifyTrack
                        isRemoval={this.props.isRemoval}
                        onRemove={this.props.onRemove}
                        onAdd={this.props.onAdd}
                        track={track}
                        key={track.id} />
                    })
                }
            </div>
        );
    }
}
export default SpotifyTrackList;