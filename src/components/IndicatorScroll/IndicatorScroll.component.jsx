import React, { Component } from 'react';

export default class IndicatorScroll extends Component {
  render() {
    return (
      <div className='indicatorScroll'>
        <p className='indicatorScroll__text'>SCROLL TO SEE MORE</p>
        <svg
          className='indicatorScroll__arrow'
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
    );
  }
}
