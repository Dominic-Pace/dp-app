import React from 'react';
import { Parallax } from 'react-parallax';

import { Container } from './styles';
const Header = () => {
  return (
    <Container>
      <Parallax
        blur={{ min: -8, max: 16 }}
        bgImage="https://aquilacommercial.com/wp-content/uploads/2018/12/Downtown-Austin.jpg"
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
