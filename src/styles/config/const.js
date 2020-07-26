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

export const fontSize = {
  s: '14px',
  m: '20px,',
  l: '26px'
};

export const titleFontSize = {
  s: '30px',
  m: '45px',
  l: '55px'
};

// export const flexCenter = {
//  ` display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;`
// }