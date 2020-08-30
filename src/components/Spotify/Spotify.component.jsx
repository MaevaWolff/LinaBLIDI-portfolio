import React, {useState, useRef} from 'react';
import SpotifyIMG from '../../assets/spotify.png';
import styled, { keyframes, css } from 'styled-components';

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
     ${(props) =>
    props.isPlaying &&
    css`
   animation: ${rotate} 6s infinite linear;
    `}
    &:hover {
      animation: ${rotate} 6s infinite linear;
    }
  }
`;


export default function Spotify() {


  const [playing, setPlaying] = useState(false);
  const ElAudio = useRef(null);

  function handlePlaying()  {
    setPlaying(!playing);
    if (!playing) {
      ElAudio.current.play()
    } else {
      ElAudio.current.pause()
    }
  }
  return (
    <Container onClick={handlePlaying} isPlaying={playing ? true : false}>
      <img src={SpotifyIMG} alt='image_spotify_playlist' />
      <audio ref={ElAudio} src={require('../../assets/audio/audio1.mp3')}></audio>
    </Container>
  );
}
