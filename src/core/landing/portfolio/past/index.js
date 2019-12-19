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
          name="The Round"
          technologies={['ReactNative', 'React', 'Redux', 'Firebase']}
        />
        <ProjectBlock
          imageUrl="https://pa.onlinemeded.org/spa-static/9c877852e7325906caec3143651e790e.png"
          name="OnlineMedEd"
          technologies={['React', 'Redux', 'Styled Components', 'Recompose']}
        />
        <ProjectBlock
          imageUrl="https://kottke.org/plus/misc/images/design-facts.jpg"
          name="Design Facts"
          technologies={['React', 'Redux', 'Firebase', 'Material UI']}
        />
        <ProjectBlock
          imageUrl="https://www.texasenvironment.org/wp-content/uploads/2015/04/tce_logo_paul_sq.jpg"
          name="Texas Campaign for the Environment"
          technologies={['React', 'Redux', 'Firebase', 'Material UI']}
        />
        <ProjectBlock
          imageUrl="https://firebasestorage.googleapis.com/v0/b/dp-app-2b9c3.appspot.com/o/wirlix.png?alt=media&token=465d4de9-d5b2-4fb2-8e3e-36260aa5f9bc"
          name="Wirlix"
          technologies={['React Native', 'Expo', 'Redux', 'Express']}
        />
        <ProjectBlock
          imageUrl="https://s29856.pcdn.co/wp-content/uploads/2016/10/laptop_ipad_iphone.png"
          name="Welltok"
          technologies={['React', 'Redux', 'NodeJS', 'GraphQL']}
        />
        <ProjectBlock
          imageUrl="https://firebasestorage.googleapis.com/v0/b/dp-app-2b9c3.appspot.com/o/squad.jpg?alt=media&token=be264e2c-94b7-4056-9379-c372e1eee6bd"
          name="Squad"
          technologies={['React Native', 'Expo', 'Redux', 'Firebase']}
        />
      </PortfolioSection>
    </Container>
  );
};

export default withTheme(Portfolio);
