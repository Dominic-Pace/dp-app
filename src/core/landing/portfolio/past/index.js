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
      <Title borderColor={theme.colors.quaternary}>Previous Projects</Title>
      <PortfolioSection>
        <ProjectBlock
          imageUrl="https://is2-ssl.mzstatic.com/image/thumb/Purple124/v4/ae/f6/4e/aef64ebc-0692-6ca5-b754-fb6bd07619ec/mzl.ccfimrud.png/750x750bb.jpeg"
        />
        <ProjectBlock
          imageUrl="https://pa.onlinemeded.org/spa-static/9c877852e7325906caec3143651e790e.png"
        />
        <ProjectBlock
          imageUrl="https://kottke.org/plus/misc/images/design-facts.jpg"
        />
      </PortfolioSection>
    </Container>
  );
};

export default withTheme(Portfolio);
