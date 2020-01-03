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
  SocialLinks,
} from './styles';
import Icon from "../../../components/icon";

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
          <InfoText>I am Dominic and I live in the sunny city of Austin, TX. I have been building professional web and mobile apps since 2015. I am an entrepreneur and tech nerd at heart. I love having the opportunity to blend those two passions together into a career.</InfoText>
          <InfoText>My professional goal is to eventually get into a beginning stage company as a technical leader. To achieve this goal I've spent most of my career working on shorter than normal projects to gain a lot of experience in different scenarios. Check out my <Link smooth to="portfolio" style={{ cursor: 'pointer' }}>portfolio</Link> below. Not only have I worked in many startup environments, but I've also worked in medium size companies! Interested in chatting about an opportunity? Contact me below!</InfoText>
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
      <SocialLinks>
        <Icon name="github" height={50} to="https://github.com/Dominic-Pace" />
        <Icon name="resume" height={50} to="https://firebasestorage.googleapis.com/v0/b/dp-app-440b6.appspot.com/o/Dominic%20Pace-Resume%202019.pdf?alt=media&token=7673b13f-55e4-4d14-b977-0410a9607533" />
        <Icon name="linkedIn" height={50} to="https://www.linkedin.com/in/dominic-pace/"  />
      </SocialLinks>
    </Container>
  );
};

export default AboutMe;
