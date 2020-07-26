import React from 'react';
import styled from 'styled-components';

import linkedinSVG from '../../assets/icons/linkedin.svg';
import dribbbleSVG from '../../assets/icons/dribbble.svg';
import githubSVG from '../../assets/icons/github.svg';

import Spotify from '../../components/Spotify/Spotify.component';
import IndicatorScroll from '../IndicatorScroll/IndicatorScroll.component';

// STYLED COMPONENTS
const Hero = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Welcome = styled.p`
  font-size: 30px;
  @media (min-width: 766px) {
    font-size: 60px;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  width: 100%;
  text-align: center;
  margin-top: 10px;
  em {
    font-weight: 600;
  }
  @media (min-width: 766px) {
    margin-top: 20px;
    font-size: 60px;
  }
`;

const Time = styled.p`
  font-size: 12px;
  margin-top: 20px;
  color: ${props => props.theme.primaryColor};
  font-family: 'Assistant';
  @media (min-width: 766px) {
    font-size: 20px;
    margin-top: 24px;
  }
`;

const Internship = styled.p`
  font-size: 14px;
  border-top: 1px solid ${props => props.theme.neutralBlack};
  border-bottom: 1px solid ${props => props.theme.neutralBlack};
  padding: 8px 0;
  margin-top: 40px;
  width: 50%;
  text-align: center;
  font-weight: 800;
  @media (min-width: 766px) {
    width: auto;
    font-size: 20px;
    padding: 12px 0;
    margin-top: 70px;
  }
`;

const Socials = styled.div`
  display: none;
  @media (min-width: 766px) {
    display: flex;
    width: 150px;
    justify-content: space-evenly;
    position: absolute;
    bottom: 20px;
    right: 80px;
  }
`;

const SocialsLinks = styled.a`
  transition: 0.4s;
  &:hover {
    transform: scale(1.4);
  }
`;

export default function HomeHero() {
  return (
    <Hero>
      <Spotify />
      <IndicatorScroll />
      <Welcome>Welcome You!</Welcome>
      <Title>
        My name is Lina, a <em>designer</em> from Paris.
      </Title>
      <Time>have a good time here!</Time>
      <Internship> LOOKING FOR A 2 YEAR INTERNSHIP IN PARIS</Internship>
      <Socials>
        <SocialsLinks href='https://www.linkedin.com/in/lina-blidi-000aa0174/'>
          <img src={linkedinSVG} alt='socials_icon_linkedin' />
        </SocialsLinks>
        <SocialsLinks href='https://dribbble.com/LinaBlidi'>
          <img src={dribbbleSVG} alt='socials_icon_dribbble' />
        </SocialsLinks>
        <SocialsLinks href='https://github.com/LinaBlidi'>
          <img src={githubSVG} alt='socials_icon_github' />
        </SocialsLinks>
      </Socials>
    </Hero>
  );
}
