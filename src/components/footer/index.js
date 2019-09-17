import React from 'react'

import { Container, Link } from './styles'
const Footer = () => (
  <Container>
    Created by Dominic Pace using React, JavaScript and custom CSS. Check out the repo <Link href='https://github.com/Dominic-Pace/dp-app' rel='noopener noreferrer' target='_blank'>HERE</Link> on github © {(new Date()).getFullYear()}
  </Container>
)

export default Footer
