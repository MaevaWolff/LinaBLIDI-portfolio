import React, { Component } from 'react';

import HomeHero from '../../components/HomeHero/HomeHero.components';

export default class HomePage extends Component {
  render() {
    return (
      <div className='home'>
        <HomeHero />
      </div>
    );
  }
}
