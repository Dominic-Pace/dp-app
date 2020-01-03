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

const ProjectBlock = ({ href, imageUrl, name, technologies }) => {
  return (
    <Container>
      <BackgroundImage imageUrl={imageUrl} />
      <ColorOverlay className="color-overlay">
        <Name className="company-name">
          {name}
        </Name>
        {href && (
          <LearnMoreButton className="learn-more-btn">
            <a href={href} target="_blank">
              Learn More
            </a>
          </LearnMoreButton>
        )}
        <TechUsed className="technologies-used">
          <TechText>Technologies Used:</TechText>
          {technologies && technologies.join(', ')}
        </TechUsed>
      </ColorOverlay>
    </Container>
  );
};

export default ProjectBlock;
