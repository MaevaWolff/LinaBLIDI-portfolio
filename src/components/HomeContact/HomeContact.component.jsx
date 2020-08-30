import React from 'react';
import styled from 'styled-components';
import {
  colors,
  breakpoints,
  fontSize,
  titleFontSize
} from '../../styles/config/const';
import workingImage from '../../assets/workingImage.png';
import linkedinSVG from '../../assets/icons/linkedin.svg';
import dribbbleSVG from '../../assets/icons/dribbble.svg';
import githubSVG from '../../assets/icons/github.svg';

export default function HomeContact() {
  return (
    <Container>
      <MainTitle>contact me</MainTitle>
      <SubTitle>Anywhere, Anytime</SubTitle>
      <Content>
        <div>
          <Text>
            Feel free to contact me, i’m enjoying every project i can be on,
            plus its always a pleasure to work with differents profiles.
          </Text>

          <MailContainer>
            <Mail href="mailto:lina.blidi@gmail.com">Send Me A Mail!</Mail>
            </MailContainer>
          <Socials>
            <Links href='https://www.linkedin.com/in/lina-blidi-000aa0174/'>
              <img src={linkedinSVG} alt='socials_icon_linkedin' />
            </Links>
            <Links href='https://dribbble.com/LinaBlidi'>
              <img src={dribbbleSVG} alt='socials_icon_dribbble' />
            </Links>
            <Links
              className='homeContact__socialsLinks'
              href='https://github.com/LinaBlidi'
            >
              <img src={githubSVG} alt='socials_icon_github' />
            </Links>
          </Socials>
        </div>
        <Illu src={workingImage} alt='workingImage' />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

      @media (min-width: ${breakpoints.medium}) {
    height: 140vh;
  }
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

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 40px;
  @media (min-width: ${breakpoints.medium}) {
    align-items: center;
  }
`;

const Text = styled.p`
  font-size: ${fontSize.s};
  @media (min-width: ${breakpoints.medium}) {
    font-size: ${fontSize.m};
  }
  @media (min-width: ${breakpoints.large}) {
    font-size: ${fontSize.l};
  }
`;

const MailContainer = styled.div`
margin-top: 4%;
` 

const Mail = styled.a`
color: ${colors.primaryColor};
margin-top: 40px;
font-weight: bold;
font-size: ${fontSize.s};
cursor: pointer;
@media (min-width: ${breakpoints.medium}) {
  font-size: ${fontSize.m};
}
@media (min-width: ${breakpoints.large}) {
  font-size: ${fontSize.l};
}
`;

const Socials = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  width: 150px;
`;

const Links = styled.a`
transition: 0.4s;
&:hover {
  transform: scale(1.4);
}
`;

const Illu = styled.img`
  width: 160px;
  @media (min-width: ${breakpoints.medium}) {
    width: 380px;
  }
  @media (min-width: ${breakpoints.large}) {
    width: 600px;
  }
`;
