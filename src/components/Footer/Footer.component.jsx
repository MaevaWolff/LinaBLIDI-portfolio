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
  a{
    text-decoration: underline;
      color: ${props => props.theme.primaryColor};
      transition: all 0.3s;
      &:hover{
        color: black;
      }
  }
`;

export default function Footer() {
  return (
    <Container>
      <p>© LINA BLIDI, 2020 ALL RIGHT RESERVED</p>
      <p>Developped by <a href="http://maevawolff.com">WOLFF Maëva</a> </p>
    </Container>
  );
}
