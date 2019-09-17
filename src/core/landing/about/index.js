import React from 'react';

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
  Title,
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
          <InfoText>I am Dominic and I live in the great city of Austin, TX. I have been professionally kicking ass and programming since 2015. As a self motivated individual I began out by teaching myself Test Automation. After quickly moving up to leadership roles in this area, I decided it was time to learn something new. That's when I hit the online courses on nights and weekends and I found my love for building complex consumer applications. I was able to pick up React.js and Node.js over the course of a couple of months. The rest is history. </InfoText>
          <InfoText>Although a few years may not sound like a long time, I have seen a lot. Don't believe me? Check out my portfolio below. I played an integral role in a medium size company of about 80 people into a <a href="https://www.forbes.com/companies/welltok/?list=cloud100#65dce30c567c" target="_blank" rel="noopener nofollow">Forbes Cloud Top 100</a> company. While that was sweet and cool and all...I absolutely love working with early stage start-ups. I've worked with a few ~20 people big, and most recently have been working on scaling and growing companies with less than 10 people. Interested in chatting about an opportunity? Contact me below!</InfoText>
        </InfoSection>
        <InfoSection>
          <Header>Let me tell you about myself</Header>
          <InfoText>Well....honestly most of my time is spent with my beloved computer and brain. However, when I'm not doing that you can find me spending time with my little family compiled of my girlfriend, 2 cats, and my best friend Oliver!</InfoText>
            <OliverImageContainer>
              <OliverImage />
            </OliverImageContainer>
          <InfoText>If I'm not occupied with one of those you can catch me hanging out with my friends on Xbox (Halo, Fortnite) or working on my Twitch Stream which is built out to help people learn to program.</InfoText>
        </InfoSection>
      </AboutSection>
    </Container>
  );
};

export default AboutMe;
