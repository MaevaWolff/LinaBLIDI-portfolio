import { createGlobalStyle } from 'styled-components';
import reset from './reset';
import { colors } from './config/const';
export const GlobalStyle = createGlobalStyle`
${reset}

* {
    box-sizing: border-box;
  }
  
  body {
    background-color: ${colors.neutralWhite};
    color:  ${colors.neutralBlack};
    font-family: 'Butler';
    font-weight: 200;
    transition: all 0.3s;
    &.socoda {
      background-color:  ${colors.projects.socoda};
      .homeWorks__image--socoda {
        opacity: 1;
        width: 30%;
      }
      .homeWorks__name {
        color: darken(${colors.projects.socoda}, 40%);
        &--socoda {
          color: white;
        }
      }
      .gridsBackground {
        opacity: 0.2;
      }
    }
    &.canwebreathenow {
      background-color: ${colors.projects.canwebreathenow};
      .homeWorks__image--canwebreathenow {
        opacity: 1;
        width: 30%;
      }
      .homeWorks__name {
        color: darken(${colors.projects.canwebreathenow}, 40%);
        &--canwebreathenow {
          color: white;
        }
      }
      .gridsBackground {
        opacity: 0.2;
      }
    }
    &.coquette {
      background-color: ${colors.projects.coquette};
      .homeWorks__image--coquette {
        opacity: 1;
        width: 30%;
      }
      .homeWorks__name {
        color: darken(${colors.projects.coquette}, 70%);
        &--coquette {
          color: white;
        }
      }
      .gridsBackground {
        opacity: 0.2;
      }
    }
    &.mypocket {
      background-color: ${colors.projects.mypocket};
      .homeWorks__image--mypocket {
        opacity: 1;
        width: 30%;
      }
      .homeWorks__name {
        color: darken(${colors.projects.mypocket}, 60%);
        &--mypocket {
          color: white;
        }
      }
      .gridsBackground {
        opacity: 0.2;
      }
    }
  
    &.gallery {
      color: ${colors.neutralWhite};
      background-color: ${colors.projects.gallery};
      .homeWorks__item {
        border-bottom: 1px solid grey;
      }
      .homeWorks__image--gallery {
        opacity: 1;
        width: 30%;
      }
      .homeWorks__name {
        color: grey;
        &--gallery {
          color: white;
        }
      }
      .gridsBackground {
        opacity: 0.1;
      }
    }
  }
  
  a {
    text-decoration: none;
    color:  ${colors.neutralBlack};
  }
  


`;
