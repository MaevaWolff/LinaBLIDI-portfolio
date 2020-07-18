import React, { Component } from 'react';
import linkedinSVG from '../../assets/icons/linkedin.svg';
import dribbbleSVG from '../../assets/icons/dribbble.svg';
import githubSVG from '../../assets/icons/github.svg';

export default class HomeHero extends Component {
  render() {
    return (
      <div className='homeHero'>
        <h2 className='homeHero__welcome'>Welcome You!</h2>
        <h1 className='homeHero__title'>
          My name is Lina, a <em>designer</em> from Paris.
        </h1>
        <p className='homeHero__text'>have a good time here!</p>
        <p className='homeHero__internship'>
          LOOKING FOR A 2 YEAR INTERNSHIP IN PARIS
        </p>
        <div className='homeHero__scroll'>
          <p className='homeHero__scrollIndicator'>SCROLL TO SEE MORE</p>
          <svg
            width='8'
            height='56'
            viewBox='0 0 8 56'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M3.64645 55.3626C3.84171 55.5579 4.15829 55.5579 4.35355 55.3626L7.53553 52.1807C7.7308 51.9854 7.7308 51.6688 7.53553 51.4736C7.34027 51.2783 7.02369 51.2783 6.82843 51.4736L4 54.302L1.17157 51.4736C0.976311 51.2783 0.659728 51.2783 0.464466 51.4736C0.269204 51.6688 0.269204 51.9854 0.464466 52.1807L3.64645 55.3626ZM3.5 0L3.5 55.0091H4.5L4.5 0L3.5 0Z'
              fill='#151515'
            />
          </svg>
        </div>
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
