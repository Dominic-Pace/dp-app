import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from 'reflexbox'

import NavIcon from './nav-icon'

import './styles.css'

const NavBar = () => (
  <Box className='navigation-bar'>
      <Link to='/'>
          <NavIcon
            pointer
            size={38}
            tipText='Home'
            type='home'
          />
      </Link>
      <Link to='/bio'>
          <NavIcon
            pointer
            size={38}
            tipText='Profile'
            type='profile'
          />
      </Link>
      <Link to='/projects'>
          <NavIcon
            pointer
            size={38}
            tipText='Projects'
            type='lightbulb'
          />
      </Link>
      <Link to='/resume'>
          <NavIcon
            pointer
            size={38}
            tipText='Resume'
            type='file'
          />
      </Link>
  </Box>
)

export default NavBar
