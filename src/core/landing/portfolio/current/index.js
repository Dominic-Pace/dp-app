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
          imageUrl="https://i.ytimg.com/vi/-cOZEFM4cw8/maxresdefault.jpg"
          name="Dataclay"
          technologies={['React', 'Redux', 'Express', 'MongoDB', 'AWS']}
        />
        <ProjectBlock
          imageUrl="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/53226701_2237857323099294_6284938868164657152_o.png?_nc_cat=109&_nc_ohc=S5QGTA9iWyUAQm4lZxNw6aOuvLRLIx5wBsotn7-CKgfIqYzR6xYzHP50g&_nc_ht=scontent-dfw5-1.xx&oh=78b1f19a5208278e6a9c46c8c2e055ef&oe=5E7F9F1D"
          name="Homads"
          technologies={['React', 'Redux']}
        />
      </PortfolioSection>
    </Container>
  );
};

export default withTheme(Portfolio);
