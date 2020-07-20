import React, { Component } from 'react';
import MetaTag from '../../components/MetaTag/MetaTag.component';

import GridsBackground from '../../components/GridsBackground/GridsBackground.component';
import HomeHero from '../../components/HomeHero/HomeHero.component';
import HomeWorks from '../../components/HomeWorks/HomeWorks.component';
import ContactMe from '../../components/ContactMe/ContactMe.component';

export default class HomePage extends Component {
  render() {
    return (
      <div className='home'>
        <MetaTag metatagPage='home' />
        <GridsBackground />
        <HomeHero />
        <HomeWorks />
        <ContactMe />
      </div>
    );
  }
}
