import React from 'react';
import { withTheme } from 'styled-components';

import { Title } from '../../../components/styled';

import {
  Container,
  Overview,
  SkillsSection,
} from './styles';

const Skills = ({ theme }) => {
  return (
    <Container id="skills">
      <Title borderColor={theme.colors.quaternary}>My Skills</Title>
      <SkillsSection>
        <Overview>
          I am a passionate creator and technologist that enjoys using <b>Javascript</b> frameworks and libraries to
          deliver high-end products. Currently, I utilize <b>NodeJS</b>, <b>React</b>, <b>React Native</b>, <b>Redux</b>, <b>Express</b>,
          <b>MongoDB</b>, <b>Git</b>, and <b>Webstorm</b>.

          <br />
          <br />
          To begin my career, I gained vast amounts of experience as an automation engineer by specializing
          in building out frameworks utilizing <b>Java</b> and <b>Jenkins</b>. After this, I had an opportunity to pursue
          full-stack development. Since then, I have worked with all aspects of the product life cycle very
          closely, specifically Front End Development using <b>React</b> and <b>Redux</b>. Outside of work I enjoy
          building out small personal apps using some of the technologies described above. I thrive in an
          agile environment and love solving difficult problems through programming.
        </Overview>
      </SkillsSection>
    </Container>
  );
};

export default withTheme(Skills);
