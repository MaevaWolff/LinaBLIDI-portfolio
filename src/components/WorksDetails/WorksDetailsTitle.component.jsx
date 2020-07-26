import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, breakpoints } from '../../styles/config/const';

const Title = styled.h3`
  border-bottom: 1px solid ${colors.neutralBlack};
  padding-bottom: 4px;
  font-family: Assistant;
  @media (min-width: ${breakpoints.medium}) {
    font-size: 18px;
  }
`;

export default function WorksDetailsTitle({ worksDetailsTitle }) {
  return <Title>{worksDetailsTitle}</Title>;
}

WorksDetailsTitle.propTypes = {
  worksDetailsTitle: PropTypes.string.isRequired
};

WorksDetailsTitle.defaultProps = {
  worksDetailsTitle: 'CATEGORY NAME'
};
