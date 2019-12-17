import React from 'react';

import {
  BackgroundImage,
  ColorOverlay,
  Container,
  LearnMoreButton,
  Name,
  TechText,
  TechUsed
} from './styles';

const ProjectBlock = ({ imageUrl, name, technologies }) => {
  return (
    <Container>
      <BackgroundImage imageUrl={imageUrl} />
      <ColorOverlay className="color-overlay">
        <Name className="company-name">
          {name}
        </Name>
        <LearnMoreButton className="learn-more-btn">Learn More</LearnMoreButton>
        <TechUsed className="technologies-used">
          <TechText>Technologies Used:</TechText>
          {technologies && technologies.join(', ')}
        </TechUsed>
      </ColorOverlay>
    </Container>
  );
};

export default ProjectBlock;
