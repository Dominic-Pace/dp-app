import React from 'react'

import NavIcon from './nav-icon'

import './styles.css'

const NavBar = () => (
  <div className='navigation-bar'>
    <NavIcon
      tipText='Home'
      type='home'
    />
    <NavIcon
      tipText='Profile'
      type='profile'
    />
    <NavIcon
      tipText='Projects'
      type='lightbulb'
    />
    <NavIcon
      tipText='Resume'
      type='file'
    />
  </div>
)

export default NavBar
