import React, { Component } from 'react';
import SpotifyIMG from '../../assets/spotify.png';

export default class Spotify extends Component {
  render() {
    return (
      <div className='spotify'>
        <img src={SpotifyIMG} alt='image_spotify_playlist' />
      </div>
    );
  }
}
