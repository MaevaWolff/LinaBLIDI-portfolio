import { css } from 'styled-components';

export const medias = {
  medium: (...args) => css`
    @media (min-width: 766px) {
      ${css(...args)}
    }
  `
};

export const colors = {
  neutralBlack: '#151515',
  neutralWhite: '#f7f7f7',
  primaryColor: '#b8a7ea',
  projects: {
    canwebreathenow: '#73669a',
    socoda: '#77c199',
    coquette: ' #9fc1f6',
    mypocket: ' #ffb7b7',
    gallery: ' #151515'
  }
};

export const breakpoints = {
  medium: '766px',
  large: '1100px',
  xlarge: '1366px'
};
