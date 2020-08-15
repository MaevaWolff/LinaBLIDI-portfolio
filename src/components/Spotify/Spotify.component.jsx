import React from 'react';
import SpotifyIMG from '../../assets/spotify.png';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
0% {
  transform: rotate(0);
}
100% {
  transform: rotate(360deg);
}
`;
const Container = styled.div`
  display: none;
  @media (min-width: 766px) {
    cursor: pointer;
    display: block;
    position: absolute;
    left: 80px;
    bottom: 10px;
    &:hover {
      animation: ${rotate} 6s infinite linear;
    }
  }
`;

export default function Spotify() {
  return (
    <Container>
      <img src={SpotifyIMG} alt='image_spotify_playlist' />
    </Container>
  );
}
