import React from 'react';

import {
  Container,
  Link,
  LinkSection,
  LinksContainer,
  LogoSpace,
} from './styles';

const HeaderLinks = ({ isFixed }) => {
  return (
    <Container isFixed={isFixed}>
      <LinksContainer>
        <LinkSection>
          <Link>About Me</Link>
          <Link>Skills</Link>
        </LinkSection>
        <LogoSpace />
        <LinkSection>
          <Link>Portfolio</Link>
          <Link>Contact</Link>
        </LinkSection>
      </LinksContainer>
    </Container>
  )
};

export default HeaderLinks;
