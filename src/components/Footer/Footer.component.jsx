import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 10%;
  margin-bottom: 5%;
  font-size: 14px;
  color: ${props => props.theme.primaryColor};
  @media (min-width: 766px) {
    font-size: 20px;
  }
`;

export default function Footer() {
  return (
    <Container>
      <p>© LINA BLIDI, 2020 ALL RIGHT RESERVED</p>
      <p>Developped by STAMPFLI Nathan & WOLLF Maëva</p>
    </Container>
  );
}
