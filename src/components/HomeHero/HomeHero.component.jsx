import React, { Component } from 'react';
import linkedinSVG from '../../assets/icons/linkedin.svg';
import dribbbleSVG from '../../assets/icons/dribbble.svg';
import githubSVG from '../../assets/icons/github.svg';

import Spotify from '../../components/Spotify/Spotify.component';
import IndicatorScroll from '../IndicatorScroll/IndicatorScroll.component';

export default class HomeHero extends Component {
  render() {
    return (
      <div className='homeHero'>
        <Spotify />
        <IndicatorScroll />
        <h2 className='homeHero__welcome'>Welcome You!</h2>
        <h1 className='homeHero__title'>
          My name is Lina, a <em>designer</em> from Paris.
        </h1>
        <p className='homeHero__text'>have a good time here!</p>
        <p className='homeHero__internship'>
          LOOKING FOR A 2 YEAR INTERNSHIP IN PARIS
        </p>

        <div className='homeHero__socials'>
          <a className='homeHero__socialsLinks' href='/'>
            <img src={linkedinSVG} alt='socials_icon_linkedin' />
          </a>
          <a className='homeHero__socialsLinks' href='/'>
            <img src={dribbbleSVG} alt='socials_icon_dribbble' />
          </a>
          <a className='homeHero__socialsLinks' href='/'>
            <img src={githubSVG} alt='socials_icon_github' />
          </a>
        </div>
      </div>
    );
  }
}
