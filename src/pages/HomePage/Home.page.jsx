import React from 'react';
import MetaTag from '../../components/MetaTag/MetaTag.component';

import GridsBackground from '../../components/GridsBackground/GridsBackground.component';
import HomeHero from '../../components/HomeHero/HomeHero.component';
import HomeWorks from '../../components/HomeWorks/HomeWorks.component';
import HomeAbout from '../../components/HomeAbout/HomeAbout.component';
import HomeContact from '../../components/HomeContact/HomeContact.component';

export default function HomePage() {
  return (
    <div className='home'>
      <MetaTag metatagPage='home' />
      <GridsBackground />
      <HomeHero />
      <HomeWorks />
      <HomeAbout />
      <HomeContact />
    </div>
  );
}
