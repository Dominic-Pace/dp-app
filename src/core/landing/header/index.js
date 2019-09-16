import React from 'react';

import { useScroll } from '../../../utils/hoc/useScroll';
import Links from '../links';

import {
  BackgroundImage,
  Container,
  Divider,
  FixedHeaderBG,
  InfoContainer,
  Logo,
  LogoContainer,
  Name,
  Title
} from './styles';

const HEADER_HEIGHT = 100;

const Header = () => {
  const { scrollY } = useScroll();

  return (
    <Container>
      <BackgroundImage />
      <InfoContainer>
        <Name>Dominic Pace</Name>
        <Divider />
        <Title>Software Engineer</Title>
      </InfoContainer>
      <LogoContainer isFixed={(window.innerHeight - HEADER_HEIGHT + 10) - scrollY < 0} >
        <Logo />
      </LogoContainer>
      <FixedHeaderBG
        headerHeight={HEADER_HEIGHT}
        opacityAmount={scrollY / window.innerHeight}
        scrollPosition={scrollY}
        windowHeight={window.innerHeight}
      />
      <Links isFixed={(window.innerHeight - HEADER_HEIGHT + 10) - scrollY < 0} />
    </Container>
  )
};

export default Header;
