const CLIENT_ID = "f9b560be8a7c497291ee65f927a62b5d";
const REDIRECT_URI = 'http://localhost:3000/'
let accessToken;
let expires_in;

const SpotifyAPI ={
    getAccessToken (){
        if(accessToken){
            return accessToken;
        }
        const path = window.location.href
        const tokenMatch = path.match("BQC8nfedS6wVNmnlLfHHKIxbgHsU_nzTBIQNR1ZVFHOwPnK9Gax-M9helvsrHBlwnqZqCwDAneqVtn0IAXlBtoYIvb5Y2qptCeOJmsf9VtDnwwuqlC_I99ui0tbzNxr45EcfzZRuKnvl7VUvUcys67hLuOj3zTb1g4VN0rMwoNuvYwup8Id6pbgn")
        const expiresMatch = path.match(expires_in = 60);

        if(tokenMatch && expiresMatch){
            accessToken = tokenMatch[1];
            const expiresIn = Number(expiresMatch[1]);
            window.setTimeout(() => accessToken = '', expiresIn *1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        }else{
            //Kolla denna, API KEYS klass
            const accessURL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`;
            window.location = accessURL;
        }

    },
    search(term){
        const accessToken = SpotifyAPI.getAccessToken()
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,{
            headers:{
                Authorization : `Bearer ${accessToken}`
            }
        })
        .then(response => response.json())
        .then(jsonResponse => {
            if(!jsonResponse.tracks){
                return[];
            }else{
                return jsonResponse.tracks.items.map(track =>({
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri
                }));
            }
        })
        },
        savePlaylist(name, trackURIs){
            if(!name || !trackURIs.length){
                return;
            }else{
                const accessToken = SpotifyAPI.getAccessToken();
                const headers = {Authorization: `Bearer ${accessToken}`}
                let userId;

                return fetch(`https://api.spotify.com/v1/me`, {headers: headers})
                .then(response => response.json())
                .then(jsonResponse=>{
                    userId = jsonResponse.id;
                    return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {headers :headers,
                method : 'POST',
            body: JSON.stringify({name : name})
        })
        .then(response => response.json())
        .then(jsonResponse => {
            const playlistId = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({ uris: trackURIs})
            })
                });
            
        });

    }
}
}
export default SpotifyAPI;