import React, { Component } from 'react';

import GridsBackground from '../../components/GridsBackground/GridsBackground.component';
import HomeHero from '../../components/HomeHero/HomeHero.component';
import HomeWorks from '../../components/HomeWorks/HomeWorks.component';

export default class HomePage extends Component {
  render() {
    return (
      <div className='home'>
        <GridsBackground />
        <HomeHero />
        <HomeWorks />
      </div>
    );
  }
}
