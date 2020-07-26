import React from 'react';
import styled from 'styled-components';
import { breakpoints, colors } from '../../styles/config/const';

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 20px;
  @media (min-width: ${breakpoints.medium}) {
    margin-top: 60px;
  }
  @media (min-width: ${breakpoints.large}) {
    margin-top: 100px;
  }
`;

const Text = styled.p`
  border-top: 1px solid ${colors.neutralBlack};
  width: 90%;
  padding-top: 20px;
  text-align: center;
  font-size: 23px;
  @media (min-width: ${breakpoints.medium}) {
    padding-top: 40px;
    font-size: 52px;
  }
  @media (min-width: ${breakpoints.large}) {
    padding-top: 60px;
    font-size: 70px;
  }
`;

const Back = styled.a`
  margin-top: 20px;
  transition: 0.3s;
  &:hover {
    color: ${colors.primaryColor};
  }
  @media (min-width: ${breakpoints.medium}){
    font-size: 26px;
  }
}
`;

export default function WorksOther() {
  return (
    <Container>
      <Text>SEE OTHER PROJECTS</Text>
      <Back href='/#works' className='worksOther__back'>
        (go back to the projects list )
      </Back>
    </Container>
  );
}
