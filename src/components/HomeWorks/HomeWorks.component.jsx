import React, { useState } from 'react';
import styled from 'styled-components';
import {
  colors,
  breakpoints,
  fontSize,
  titleFontSize
} from '../../styles/config/const';
import works from '../../data/works.json';

export default function HomeWorks() {
  const [socoda] = useState('socoda');
  const [coquette] = useState('coquette');
  const [canwebreathenow] = useState('canwebreathenow');
  const [mypocket] = useState('mypocket');
  const [gallery] = useState('gallery');

  const handleMouseOver = event => {
    const body = document.body;
    const data = event.target.dataset.info;
    if (data === socoda) {
      body.classList.add('socoda');
    } else if (data === coquette) {
      body.classList.add('coquette');
    } else if (data === coquette) {
      body.classList.add('coquette');
    } else if (data === canwebreathenow) {
      body.classList.add('canwebreathenow');
    } else if (data === mypocket) {
      body.classList.add('mypocket');
    } else if (data === gallery) {
      body.classList.add('gallery');
    }
  };

  const handleMouseLeave = () => {
    const body = document.body;
    body.classList = '';
  };

  return (
    <Container>
      {works.map((work, index) => {
        return (
          <Items
            key={index}
            href={`/works?name=${work.name}`}
            data-info={work.name}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            <Item>
              <Name className={`homeWorks__name homeWorks__name--${work.name}`}>
                {work.name}
              </Name>
              <Year className='homeWorks__year'>({work.year})</Year>
              <WorksImage
                src={require(`../../assets/${work.heroImage}`)}
                alt='home_hover'
                className={`homeWorks__image--${work.name}`}
              ></WorksImage>
            </Item>
          </Items>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  height: 140vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Items = styled.a`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const Item = styled.div`
  margin-top: 20px;
  border-bottom: 1px solid ${colors.neutralBlack};
  width: 90%;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  @media (min-width: ${breakpoints.medium}) {
    width: 80%;
    align-items: center;
    margin-top: 60px;
    flex-direction: row;
    align-items: flex-end;
  }
`;

const Name = styled.h3`
  font-size: ${fontSize.l};
  text-transform: uppercase;
  transition: all 0.5s;
  @media (min-width: ${breakpoints.medium}) {
    font-size: ${titleFontSize.l};
  }
`;

const Year = styled.h4`
  font-size: 18px;
`;

const WorksImage = styled.img`
  transition: all 0.3s;
  position: absolute;
  top: -60px;
  right: 0;
  width: 0;
  opacity: 0;
`;
