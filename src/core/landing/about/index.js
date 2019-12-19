import React from 'react';
import { Link } from 'react-scroll';

import { Title } from '../../../components/styled';

import {
  AboutSection,
  Container,
  Header,
  InfoSection,
  InfoText,
  OliverImage,
  OliverImageContainer,
  ProfileImage,
  ProfileImageContainer,
} from './styles';

const AboutMe = () => {
  return (
    <Container id="about-me">
      <Title>About Me</Title>
      <AboutSection>
        <ProfileImageContainer>
          <ProfileImage />
        </ProfileImageContainer>
        <InfoSection>
          <Header>Hey There!</Header>
          <InfoText>I am Dominic and I live in the great city of Austin, TX. I have been professionally kicking ass and programming since 2015. As an entrepreneur at heart I learned a couple years ago that the corporate life wasn't for me and left that all behind. The rest is history.</InfoText>
          <InfoText>Although only being in the industry for a few years may not sound like a long time, I have seen a lot. Don't believe me? Check out my <Link smooth to="portfolio">portfolio</Link> below. I played an integral role in a medium size company of about 80 people into a <a href="https://www.forbes.com/companies/welltok/?list=cloud100#65dce30c567c" target="_blank" rel="noopener noreferrer">Forbes Cloud Top 100</a> company. While that was sweet and cool and all...I absolutely love working with early stage start-ups. I've worked with a few ~20 people big, and most recently have been working on scaling and growing companies with less than 10 people. Interested in chatting about an opportunity? Contact me below!</InfoText>
        </InfoSection>
        <InfoSection>
          <Header>Let me tell you about myself</Header>
          <InfoText>Well....honestly most of my time is spent with my beloved computer and brain. However, when I'm not doing that you can find me spending time with my little family compiled of my fiancé, 2 cats, and my best friend Oliver!</InfoText>
            <OliverImageContainer>
              <OliverImage />
            </OliverImageContainer>
          <InfoText>If I'm not occupied with one of those you can catch me hanging out with my friends on Xbox (Halo, Destiny 2) or playing a board game with my family.</InfoText>
        </InfoSection>
      </AboutSection>
    </Container>
  );
};

export default AboutMe;
