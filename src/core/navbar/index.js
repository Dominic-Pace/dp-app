import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Col } from 'react-bootstrap'

import { NavMenuIcon, NavPopIcon } from '../../components/icon/index'
import ContactMenu from './contact-menu/index'

import './styles.css'

const getIconSize = (active) => (
  active ? 39 : 32
)

const isActive = (active, icon) => (
  active === icon
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
      titleComponent={
        <ContactMenu active={activeNavItem}/>
      }
      type='connect'
    />
  </Col>
)

export default withRouter(NavBar)
