import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { breakpoints } from '../../styles/config/const';

export default function WorksImages(props) {
  return (
    <Container>
      <Wrapper>{props.worksImages}</Wrapper>
      <Mobile>{props.worksImagesMobile}</Mobile>
    </Container>
  );
}

WorksImages.propTypes = {
  worksImages: PropTypes.array,
  worksImagesMobile: PropTypes.array
};

const Container = styled.div``;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 80px;
  img {
    max-width: 90%;
    margin-bottom: 40px;
    @media (min-width: ${breakpoints.medium}) {
      margin-bottom: 60px;
    }
  }
`;

const Mobile = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  img {
    max-width: 30%;
  }
`;
