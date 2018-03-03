import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'

import NavIcon from '../nav-icon'

import './styles.css'

const RESUME = 'https://firebasestorage.googleapis.com/v0/b/dp-app-2b9c3.appspot.com/o/Dominic%20Pace%20-%20Resume.pdf?alt=media&token=4fc3f3c8-a611-4ddd-91a8-0b7c80db87bc'

const getIconSize = (active) => (
  active ? 36 : 32
)

const isActive = (active, icon) => (
  active === icon
)

const NavBar = ({ activeNavItem, handleClick }) => (
  <Col className='navigation-bar'>
    <Link to='/'>
      <NavIcon
        active={isActive(activeNavItem, 'profile')}
        onClick={() => handleClick('profile')}
        pointer
        size={getIconSize(isActive(activeNavItem, 'profile'))}
        tipPlacement='right'
        tipText='Profile'
        type='profile'
      />
    </Link>
    <Link to='/portfolio'>
      <NavIcon
        active={isActive(activeNavItem, 'portfolio')}
        onClick={() => handleClick('portfolio')}
        pointer
        size={getIconSize(isActive(activeNavItem, 'portfolio'))}
        tipPlacement='right'
        tipText='Portfolio'
        type='lightbulb'
      />
    </Link>
    <a href={RESUME} target='_blank'>
      <NavIcon
        pointer
        size={getIconSize(isActive(activeNavItem, 'resume'))}
        tipPlacement='right'
        tipText='Resume'
        type='file'
      />
    </a>
  </Col>
)

export default NavBar
