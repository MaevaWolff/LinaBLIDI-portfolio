import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  colors,
  breakpoints,
  fontSize,
  titleFontSize
} from '../../styles/config/const';

import WorksDetailsTitle from './WorksDetailsTitle.component';

export default function WorksDetails(props) {
  return (
    <Container>
      <Title>PROJECT DETAILS</Title>
      <Time>{props.worksTime}</Time>
      <Date>{props.worksDate}</Date>

      <Categories>
        <Category>
          <WorksDetailsTitle worksDetailsTitle='Title' />
          <Name>{props.worksName}</Name>
        </Category>
        <Category>
          <WorksDetailsTitle worksDetailsTitle='Colors' />
          <Colors>
            <Color style={{ backgroundColor: props.worksColor1 }}></Color>
            <Color style={{ backgroundColor: props.worksColor2 }}></Color>
            <Color style={{ backgroundColor: props.worksColor3 }}></Color>
          </Colors>
        </Category>
        <Category>
          <WorksDetailsTitle worksDetailsTitle='Typography' />
          <Typography>{props.worksTypo}</Typography>
        </Category>
        <Category>
          <WorksDetailsTitle worksDetailsTitle='Partners' />
          <Partners>{props.worksPartners}</Partners>
        </Category>
      </Categories>
    </Container>
  );
}

WorksDetails.propTypes = {
  worksTime: PropTypes.string,
  worksDate: PropTypes.string,
  worksName: PropTypes.string.isRequired,
  worksColor1: PropTypes.string,
  worksColor2: PropTypes.string,
  worksColor3: PropTypes.string,
  worksPartners: PropTypes.array
};

WorksDetails.defaultProps = {
  worksName: 'project name'
};

const Container = styled.div`
  text-transform: uppercase;
width: 80%;
margin: 0 4%;
    @media (min-width: ${breakpoints.medium}) {
   margin: 0 10%;
  }
`;

const Title = styled.h2`
  width: fit-content;
  border-bottom: 1px solid ${colors.neutralBlack};
  padding-bottom: 4px;
  font-size: 23px;
  @media (min-width: ${breakpoints.medium}) {
    font-size: 40px;
  }
`;

const Time = styled.p`
  font-family: Assistant;
  margin-top: 20px;
  @media (min-width: ${breakpoints.medium}) {
    font-size: ${fontSize.m};
    margin-top: 40px;
  }
`;

const Date = styled.p`
  font-family: Assistant;
  width: 100%;
  border-bottom: 1px solid ${colors.neutralBlack};
  margin-top: 10px;
  padding-bottom: 20px;
  @media (min-width: ${breakpoints.medium}) {
    padding-bottom: 40px;
    font-size: ${fontSize.m};
  }
`;

const Categories = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  margin: 8% 4%;
  grid-gap: 40px;
  @media (min-width: ${breakpoints.medium}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

const Category = styled.article``;

const Name = styled.p`
  margin-top: 4%;
  font-family: Assistant;
  font-weight: 600;
  font-size: ${titleFontSize.s};
`;

const Colors = styled.div`
  margin-top: 4%;
  display: flex;
  justify-content: space-evenly;
`;

const Color = styled.div`
  width: 60px;
  height: 60px;
  @media (min-width: ${breakpoints.medium}) {
    width: 80px;
    height: 80px;
  }
`;

const Typography = styled.p`
 font-family: Assistant;
  margin-top: 4%;

  @media (min-width: ${breakpoints.medium}) {
    font-size: ${fontSize.m};
  }
`


const Partners = styled.ul`
  margin-top: 4%;
`;
