import React from 'react';
import { withTheme } from 'styled-components';

import CurrentProjects from './current';
import PastProjects from './past';
import { Container } from './styles';

const Portfolio = ({ theme }) => {
  return (
    <Container id="portfolio">
      <CurrentProjects />
      <PastProjects />
    </Container>
  );
};

export default withTheme(Portfolio);
