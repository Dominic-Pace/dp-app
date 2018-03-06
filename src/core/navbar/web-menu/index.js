import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'


import ContactMenu from '../contact-menu/index'
import { NavMenuIcon, NavPopIcon } from '../../../components/icon'

const WebMenu = ({ activeNavItem, getIconSize, handleClick, isActive, resumeLink }) => (
  <Col className='navigation-bar'>
    <Link to='/'>
      <NavPopIcon
        active={isActive(activeNavItem, 'profile')}
        activeClassName='active-mobile'
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
      titleComponent={
        <ContactMenu
          active={activeNavItem}
          resumeLink={resumeLink}
        />
      }
      type='connect'
    />
  </Col>
)

export default WebMenu
