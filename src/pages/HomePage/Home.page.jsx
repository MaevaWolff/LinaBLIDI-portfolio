import React from 'react';
import MetaTag from '../../components/MetaTag/MetaTag.component';
import styled from 'styled-components';
import { breakpoints } from '../../styles/config/const';

import GridsBackground from '../../components/GridsBackground/GridsBackground.component';
import HomeHero from '../../components/HomeHero/HomeHero.component';
import HomeWorks from '../../components/HomeWorks/HomeWorks.component';
import HomeAbout from '../../components/HomeAbout/HomeAbout.component';
import HomeContact from '../../components/HomeContact/HomeContact.component';

export default function HomePage() {
  return (
    <Container>
      <MetaTag metatagPage='home' />
      <GridsBackground />
      <HomeHero />
      <HomeWorks />
      <HomeAbout />
      <HomeContact />
    </Container>
  );
}

const Container = styled.div`
  margin: 0px 20px;
  position: relative;
  @media (min-width: ${breakpoints.medium}) {
    margin: 0px 80px;
  }
  @media (min-width: ${breakpoints.large}) {
    margin: 0px 140px;
  }
`;
