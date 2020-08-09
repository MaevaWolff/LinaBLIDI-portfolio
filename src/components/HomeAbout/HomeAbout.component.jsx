import React from 'react';
import styled from 'styled-components';
import {
  colors,
  breakpoints,
  fontSize,
  titleFontSize
} from '../../styles/config/const';

export default function HomeAbout() {
  return (
    <Container>
      <MainTitle>HEY THAT’S ME</MainTitle>
      <SubTitle>Oh, Finaly there?</SubTitle>
      <Infos>
        <AboutMe>
          I’m a creative 20yo girl who love touching Everything, especially in
          <span> digital design</span>. <br /> I’m inspiring myself through
          Fashion, Nature, Litterature... <br /> <br /> Studying at Hetic on my
          2nd Year im looking for a <em>2 yEARS INTERNSHIP</em> in Paris.
          <br />
          <br /> “ At least be creative “ innit ?
        </AboutMe>
        <SkillsContainer>
          <Wrapper>
            <TitleSkills>WHAT I USE</TitleSkills>
            <Items>
              <Item>Figma</Item>
              <Item>Adobe XD</Item>
              <Item>Photoshop</Item>
              <Item>Animate</Item>
              <Item>After Effect</Item>
              <Item>Illustrator</Item>
              <Item>Blender</Item>
              <Item>DAZ Studio</Item>
            </Items>
          </Wrapper>
          <Wrapper>
            <TitleSkills>WHAT I DO</TitleSkills>
            <Items>
              <Item>HTML</Item>
              <Item>CSS/SCSS</Item>
              <Item>JavaScript</Item>
              <Item>Git</Item>
            </Items>
          </Wrapper>
        </SkillsContainer>
      </Infos>
      <Available>
        <Cv href='/'> DOWNLOAD MY CV</Cv>
        <Freelance href='/'>I’m available for Freelance</Freelance>
      </Available>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const MainTitle = styled.h2`
  font-size: ${titleFontSize.s};
  text-transform: uppercase;
  @media (min-width: ${breakpoints.medium}) {
    font-size: ${titleFontSize.m};
  }
  @media (min-width: ${breakpoints.large}) {
    font-size: ${titleFontSize.l};
  }
`;

const SubTitle = styled.h3`
  margin-left: 70px;
  font-size: ${titleFontSize.s};
  @media (min-width: ${breakpoints.medium}) {
    font-size: ${titleFontSize.m};
  }
  @media (min-width: ${breakpoints.large}) {
    font-size: ${titleFontSize.l};
  }
`;

const Infos = styled.section`
  font-size: ${fontSize.s};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 40px;
  @media (min-width: ${breakpoints.medium}) {
    font-size: ${fontSize.m};
  }
  @media (min-width: ${breakpoints.large}) {
    font-size: ${fontSize.l};
  }
`;

const AboutMe = styled.p`
  em {
    font-weight: 800;
    text-transform: uppercase;
  }
  span {
    color: ${colors.primaryColor};
  }
  @media (min-width: ${breakpoints.medium}) {
    width: 50%;
    line-height: 30px;
  }
`;

const SkillsContainer = styled.div`
  margin-top: 20px;
  @media (min-width: ${breakpoints.medium}) {
    margin-top: 0;
  }
`;

const Wrapper = styled.div``;

const TitleSkills = styled.h3`
  font-weight: 800;
  color: ${colors.primaryColor};
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  @media (min-width: ${breakpoints.medium}) {
    grid-gap: 10px 40px;
    margin: 5% 0;
  }
`;

const Item = styled.p``;

const Available = styled.div`
  display: flex;
  margin-top: 4%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: ${breakpoints.medium}) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Cv = styled.a`
  background-color: ${colors.primaryColor};
  font-family: Assistant;
  font-weight: 600;
  color: ${colors.neutralWhite};
  padding: 5px 5px;
  width: fit-content;
  transition: all 0.4s;
  @media (min-width: ${breakpoints.medium}) {
    padding: 10px 20px;
  }
  &:hover {
    box-shadow: rgba(190, 177, 255, 0.6) 0px 10px 30px;
    transform: translateY(-10px);
  }
  &:active {
    transform: translateY(4px);
  }
`;

const Freelance = styled.a`
  color: ${colors.primaryColor};
  border-bottom: 1px solid ${colors.primaryColor};
  width: fit-content;
  margin-top: 15px;
  transition: color 0.4s;
  @media (min-width: ${breakpoints.medium}) {
    margin: 0;
    font-size: ${fontSize.l};
  }
  &:hover {
    color: ${colors.neutralBlack};
  }
`;
