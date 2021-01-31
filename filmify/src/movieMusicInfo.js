import React from "react";

class movieMusicInfo extends React.Component{



    search(term) {
        Spotify.search(term).then((searchResults) =>
          this.setState({ searchResults: searchResults })
        );
      }


}
export default movieMusicInfo;