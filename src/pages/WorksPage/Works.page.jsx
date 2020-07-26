import React, { useState } from 'react';
import works from '../../data/works.json';
import styled from 'styled-components';

import MetaTag from '../../components/MetaTag/MetaTag.component';

import GridsBackground from '../../components/GridsBackground/GridsBackground.component';

import WorksHero from '../../components/WorksHero/WorksHero.component';
import WorksDetails from '../../components/WorksDetails/WorksDetails.component';
import WorksImages from '../../components/WorksImages/WorksImages.component';
import WorksOther from '../../components/WorksOther/WorksOther.component';

const Container = styled.div`
  position: relative;
`;
export default function WorksPage(props) {
  const [name] = useState(props.location.search.substr(6));

  return (
    <Container>
      <MetaTag metatagPage='works' />
      <GridsBackground />
      <WorksHero
        worksName={works.filter(el => el.name === name)[0].name}
        worksHashtag={works.filter(el => el.name === name)[0].hashtag}
        worksDescription={works.filter(el => el.name === name)[0].description}
        worksLink={works.filter(el => el.name === name)[0].link}
        worksHero={works.filter(el => el.name === name)[0].heroImage}
      />
      <WorksDetails
        worksTime={works.filter(el => el.name === name)[0].time}
        worksDate={works.filter(el => el.name === name)[0].date}
        worksName={works.filter(el => el.name === name)[0].name}
        worksColor1={works.filter(el => el.name === name)[0].color1}
        worksColor2={works.filter(el => el.name === name)[0].color2}
        worksColor3={works.filter(el => el.name === name)[0].color3}
        worksPartners={works
          .filter(el => el.name === name)[0]
          .partners.map((partner, i) => {
            return <li key={i}>{partner}</li>;
          })}
      />
      <WorksImages
        worksImages={works
          .filter(el => el.name === name)[0]
          .images.map((image, index) => {
            return (
              <img
                key={index}
                className='worksImages__item'
                alt='project_details'
                src={require(`../../assets/${image}`)}
              />
            );
          })}
        worksImagesMobile={works
          .filter(el => el.name === name)[0]
          .imagesMobile.map((imageMobile, index) => {
            return (
              <img
                key={index}
                className='worksImages__itemMobile'
                alt='project_details_mobile'
                src={require(`../../assets/${imageMobile}`)}
              />
            );
          })}
      />
      <WorksOther />
    </Container>
  );
}
