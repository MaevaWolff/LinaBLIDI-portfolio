import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { colors } from '../../styles/config/const';

const Container = styled.div`
  position: fixed;
  z-index: 6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: grey;
  width: 100%;
  height: 40px;
  color: ${colors.neutralBlack};
  font-family: Assistant;
  font-weight: 600;

  &.danger {
    background-color: rgb(255, 172, 172);
    color: rgb(190, 38, 38);
  }
`;

export default function Alert(props) {
  return (
    <Container className={`${props.AlertType}`}>
      <p>{props.AlertText}</p>
    </Container>
  );
}

Alert.propTypes = {
  AlertType: PropTypes.string,
  AlertText: PropTypes.string.isRequired
};

Alert.defaultProps = {
  AlertText: 'message of alert'
};
