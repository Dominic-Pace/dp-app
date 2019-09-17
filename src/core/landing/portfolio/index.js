import React from 'react';
import { withTheme } from 'styled-components';

import { Title } from '../../../components/styled';

import {
  Container,
  PortfolioSection,
} from './styles';

const Portfolio = ({ theme }) => {
  return (
    <Container id="portfolio">
      <Title borderColor={theme.colors.quaternary}>Portfolio</Title>
      <PortfolioSection>
        Current Projects
      </PortfolioSection>
    </Container>
  );
};

export default withTheme(Portfolio);
