import React from 'react';
import styled, { keyframes } from 'styled-components';
import { breakpoints } from '../../styles/config/const';

const Container = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  @media (min-width: ${breakpoints.medium}) {
    bottom: 40px;
  }
`;

const Text = styled.p`
  font-size: 14px;
  font-family: 'Assistant';
`;

const scroll = keyframes`
0% {
  transform: none;
}
100% {
  transform: translateY(20px);
}
`;

const Arrow = styled.div`
  margin-top: 20px;
  animation: ${scroll} 1.2s infinite alternate ease-in;
`;

export default function IndicatorScroll() {
  return (
    <Container>
      <Text>SCROLL TO SEE MORE</Text>
      <Arrow>
        <svg
          width='8'
          height='56'
          viewBox='0 0 8 56'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M3.64645 55.3626C3.84171 55.5579 4.15829 55.5579 4.35355 55.3626L7.53553 52.1807C7.7308 51.9854 7.7308 51.6688 7.53553 51.4736C7.34027 51.2783 7.02369 51.2783 6.82843 51.4736L4 54.302L1.17157 51.4736C0.976311 51.2783 0.659728 51.2783 0.464466 51.4736C0.269204 51.6688 0.269204 51.9854 0.464466 52.1807L3.64645 55.3626ZM3.5 0L3.5 55.0091H4.5L4.5 0L3.5 0Z'
            fill='#151515'
          />
        </svg>
      </Arrow>
    </Container>
  );
}
