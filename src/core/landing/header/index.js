import React from 'react';
import { Parallax } from 'react-parallax';

import HeaderBackground from '../../../assets/img/header.jpg';

import { Container } from './styles';

const Header = () => {
  return (
    <Container>
      <Parallax
        blur={{ min: -8, max: 16 }}
        bgImage={HeaderBackground}
        bgImageAlt="the cat"
        strength={500}
      >
        <div style={{ height: '100vh' }} />
      </Parallax>
      <div style={{ color: 'white', position: 'absolute', bottom: 24, left: '47%' }}>
        Hello World
      </div>
    </Container>
  )
};

export default Header;
