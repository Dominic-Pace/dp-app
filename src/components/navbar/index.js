import React from 'react'

import NavIcon from './nav-icon'

import './styles.css'

const NavBar = () => (
  <div className='navigation-bar'>
    <NavIcon
      pointer
      popover
      size={38}
      tipText='Home'
      type='home'
    />
    <NavIcon
      pointer
      popover
      size={38}
      tipText='Profile'
      type='profile'
    />
    <NavIcon
      pointer
      popover
      size={38}
      tipText='Projects'
      type='lightbulb'
    />
    <NavIcon
      pointer
      popover
      size={38}
      tipText='Resume'
      type='file'
    />
  </div>
)

export default NavBar
