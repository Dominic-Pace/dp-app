import React from 'react';
import { Link } from 'react-scroll';

import {
  Container,
  AnimatedLink,
  LinkSection,
  LinksContainer,
  LogoSpace,
} from './styles';

const HeaderLinks = ({ isFixed }) => {
  return (
    <Container isFixed={isFixed}>
      <LinksContainer>
        <LinkSection>
          <AnimatedLink as={Link} smooth to="about-me">About Me</AnimatedLink>
          <AnimatedLink as={Link} smooth offset={-100} to="skills">Skills</AnimatedLink>
        </LinkSection>
        <LogoSpace />
        <LinkSection>
          <AnimatedLink as={Link} smooth offset={-100} to="portfolio">Portfolio</AnimatedLink>
          <AnimatedLink as={Link} smooth offset={-100} to="contact">Contact</AnimatedLink>
        </LinkSection>
      </LinksContainer>
    </Container>
  )
};

export default HeaderLinks;
