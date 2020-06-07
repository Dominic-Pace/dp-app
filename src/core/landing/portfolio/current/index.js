import React from 'react';
import { withTheme } from 'styled-components';

import ProjectBlock from '../project';
import { Title } from '../../../../components/styled';

import {
  Container,
  PortfolioSection,
} from './styles';

const Portfolio = ({ theme }) => {
  return (
    <Container id="portfolio">
      <Title borderColor={theme.colors.quaternary}>Current Projects</Title>
      <PortfolioSection>
        <ProjectBlock
          href="https://www.zenbusiness.com"
          imageUrl="https://www.greycroft.com/wp-content/uploads/2019/09/logo840x840-420x420.png"
          name="ZenBusiness"
          technologies={['React', 'Redux', 'Google Cloud']}
        />
      </PortfolioSection>
    </Container>
  );
};

export default withTheme(Portfolio);
