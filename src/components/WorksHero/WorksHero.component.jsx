import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, breakpoints, fontSize } from '../../styles/config/const';

import IndicatorScroll from '../IndicatorScroll/IndicatorScroll.component';

export default function WorksHero(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
    const body = document.body;
    body.classList = '';
  });

  return (
    <Container>
      <IndicatorScroll />
      <Infos>
        <Name>{props.worksName}</Name>
        <Hashtag>#{props.worksHashtag}</Hashtag>
        <Description>{props.worksDescription}</Description>

        <Link href={props.worksLink}>
          <p>see the website right here</p>
        </Link>
      </Infos>
      {/* <Image
          src={require(`../../assets/${this.props.worksHero}`)}
          alt='image_hero_project'
        /> */}
    </Container>
  );
}

WorksHero.propTypes = {
  worksName: PropTypes.string.isRequired,
  worksHashtag: PropTypes.string
};

WorksHero.defaultProp = {
  worksName: 'PROJECT NAME'
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Infos = styled.div`
  margin: 0 10%;
  @media (min-width: ${breakpoints.medium}) {
    margin: 0 120px;
  }
  @media (min-width: ${breakpoints.large}) e {
    margin: 0 200px;
  }
`;

const Name = styled.h1`
  text-transform: uppercase;
  font-size: 23px;
  @media (min-width: ${breakpoints.medium}) {
    font-size: 70px;
  }
`;

const Hashtag = styled.p`
  font-weight: 600;
  font-size: ${fontSize.s};
  text-transform: uppercase;
  color: ${colors.primaryColor};
  @media (min-width: ${breakpoints.medium}) {
    font-size: ${fontSize.m};
  }
`;

const Description = styled.p`
  font-family: 'Assistant';
  width: 70%;
  margin-top: 45px;
  font-size: ${fontSize.s};
  line-height: 20px;
  text-transform: uppercase;
  @media (min-width: ${breakpoints.medium}) {
    font-size: ${fontSize.m};
    margin-top: 60px;
    line-height: 26px;
  }
`;

const Link = styled.a`
color: var(--primary-color);
text-decoration: underline;
font-weight: 600;
p {
  margin-top: 80px;
  @media (min-width: ${breakpoints.medium}) {
    font-size: 18px;
    margin-top: 20px;
  }
  @media (min-width: ${breakpoints.large}){
    margin-top: 40px;
  }
}}
`;

// const Image = styled.img`
//   position: absolute;
//   z-index: -1;
//   right: -140px;
//   max-width: 90%;
//   max-height: 60%;
//   transform: rotate(18deg);
//   @media (min-width: ${breakpoints.medium}) {
//     transform: rotate(8deg);
//     right: -40px;
//   }
// `;
