import { css } from 'styled-components';

export const medias = {
  medium: (...args) => css`
    @media (min-width: 766px) {
      ${css(...args)}
    }
  `
};

//   @mixin medium {
//     @media (min-width: 766px) {
//       @content;
//     }
//   }

//   @mixin large {
//     @media (min-width: 1100px) {
//       @content;
//     }
//   }

//   @mixin xlarge {
//     @media (min-width: 1366px) {
//       @content;
//     }
//   }
