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
          I started off in the industry in Test Automation using <b>Java</b>. After a long solid year of grinding and making it into a leadership role, I decided that testing just wasn't for me. That's when I started hitting the online courses, dabbling with some personal projects, and picking up tickets at work on nights and weekends to learn <b>React</b> and <b>Node</b>. The rest is history.
        </Overview>
      </SkillsSection>
    </Container>
  );
};

export default withTheme(Skills);
