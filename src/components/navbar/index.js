import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'

import { NavMenuIcon, NavPopIcon } from '../icon'

import './styles.css'

const RESUME = 'https://firebasestorage.googleapis.com/v0/b/dp-app-2b9c3.appspot.com/o/Dominic%20Pace%20-%20Resume.jpg?alt=media&token=6754756c-4b65-4aaf-b35a-6261d3433fed'

const getIconSize = (active) => (
  active ? 39 : 32
)

const isActive = (active, icon) => (
  active === icon
)

const renderConnectNav = (active) => (
  <span>
    <a
      href='https://www.linkedin.com/in/dominic-pace/'
      rel='noopener noreferrer'
      target='_blank'
    >
      <NavPopIcon
        pointer
        size={getIconSize(isActive(active, 'linkedIn'))}
        tipPlacement='right'
        tipText='Linked In'
        type='linkedIn'
        wrapperClassName='menu'
      />
    </a>
    <a
      href='https://github.com/Dominic-Pace'
      rel='noopener noreferrer'
      target='_blank'
    >
      <NavPopIcon
        pointer
        size={getIconSize(isActive(active, 'github'))}
        tipPlacement='right'
        tipText='Github'
        type='github'
        wrapperClassName='menu'
      />
    </a>
    <a
      href='https://twitter.com/DominicPaceJS'
      rel='noopener noreferrer'
      target='_blank'
    >
      <NavPopIcon
        pointer
        size={getIconSize(isActive(active, 'twitter'))}
        tipPlacement='right'
        tipText='Twitter'
        type='twitter'
        wrapperClassName='menu'
      />
    </a>
    <a href='mailto:dpace@nhpace.net'>
      <NavPopIcon
        pointer
        size={getIconSize(isActive(active, 'mail'))}
        tipPlacement='right'
        tipText='Reach Out!'
        type='mail'
        wrapperClassName='menu'
      />
    </a>
    <a href={RESUME} target='_blank'>
      <NavPopIcon
        pointer
        size={getIconSize(isActive(active, 'resume'))}
        tipPlacement='right'
        tipText='Resume'
        type='file'
        wrapperClassName='menu'
      />
    </a>
    <a
      href='https://paypal.me/DominicPace'
      rel='noopener noreferrer'
      target='_blank'
    >
      <NavPopIcon
        pointer
        size={30}
        style={{ marginLeft: 4 }}
        tipPlacement='right'
        tipText='Buy me a drink!'
        type='drink'
        wrapperClassName='menu'
      />
    </a>
  </span>
)

const NavBar = ({ activeNavItem, handleClick }) => (
  <Col className='navigation-bar'>
    <Link to='/'>
      <NavPopIcon
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
      <NavPopIcon
        active={isActive(activeNavItem, 'portfolio')}
        onClick={() => handleClick('portfolio')}
        pointer
        size={getIconSize(isActive(activeNavItem, 'portfolio'))}
        tipPlacement='right'
        tipText='Portfolio'
        type='portfolio'
      />
    </Link>
    <NavMenuIcon
      pointer
      size={getIconSize(isActive(activeNavItem, 'connect'))}
      titleComponent={renderConnectNav()}
      type='connect'
    />
  </Col>
)

export default NavBar
