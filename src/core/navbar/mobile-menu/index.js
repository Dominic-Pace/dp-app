import React from 'react'
import { Link } from 'react-router-dom'

import Icon, { MobileNavIcon } from '../../../components/icon'

import '../styles.css'

const getMobileIconSize = 68

const renderBurgerIcon = (handleBurgerClick) => (
  <div className='mobile-nav-container'>
    <div className='circle' />
    <Icon
      onClick={() => handleBurgerClick()}
      pointer
      size={32}
      style={{ marginBottom: 20, paddingTop: 20 }}
      type='menu'
    />
  </div>
)

const renderMobileMenu = (activeNavItem, handleBurgerClick, handleClick, isActive, resumeLink) => (
  <div className='mobile-menu-container'>
    <div className='mobile-nav-container close-icon'>
      <Icon
        onClick={() => handleBurgerClick()}
        pointer
        size={32}
        style={{ marginBottom: 20, paddingTop: 20 }}
        type='close'
      />
    </div>
    <Link to='/'>
      <MobileNavIcon
        active={isActive(activeNavItem, 'profile')}
        onClick={() => handleClick('profile')}
        size={getMobileIconSize}
        tipText='Profile'
        type='profile'
      />
    </Link>
    <Link to='/portfolio'>
      <MobileNavIcon
        active={isActive(activeNavItem, 'portfolio')}
        onClick={() => handleClick('portfolio')}
        size={getMobileIconSize}
        tipText='Portfolio'
        type='portfolio'
      />
    </Link>
    <a
      href='https://www.linkedin.com/in/dominic-pace/'
      rel='noopener noreferrer'
      target='_blank'
    >
      <MobileNavIcon
        onClick={() => handleBurgerClick()}
        size={getMobileIconSize}
        tipText='Linked In'
        type='linkedIn'
      />
    </a>
    <a
      href='https://github.com/Dominic-Pace'
      rel='noopener noreferrer'
      target='_blank'
    >
      <MobileNavIcon
        onClick={() => handleBurgerClick()}
        size={getMobileIconSize}
        tipText='Github'
        type='github'
      />
    </a>
    <a
      href='https://twitter.com/DominicPaceJS'
      rel='noopener noreferrer'
      target='_blank'
    >
      <MobileNavIcon
        onClick={() => handleBurgerClick()}
        size={getMobileIconSize}
        tipText='Twitter'
        type='twitter'
      />
    </a>
    <a href='mailto:dpace@nhpace.net'>
      <MobileNavIcon
        onClick={() => handleBurgerClick()}
        size={getMobileIconSize}
        tipText='Reach Out!'
        type='mail'
      />
    </a>
    <a href={resumeLink} target='_blank'>
      <MobileNavIcon
        onClick={() => handleBurgerClick()}
        size={getMobileIconSize}
        tipText='Resume'
        type='file'
      />
    </a>
    <a
      href='https://paypal.me/DominicPace'
      rel='noopener noreferrer'
      target='_blank'
    >
      <MobileNavIcon
        onClick={() => handleBurgerClick()}
        size={getMobileIconSize - 6}
        style={{ marginLeft: 4, marginTop: '-6px' }}
        tipText='Buy me a drink!'
        type='drink'
      />
    </a>
  </div>
)

const MobileMenu = ({ activeNavItem, handleBurgerClick, handleClick, isActive, isBurgerOpen, resumeLink }) => (
  <div className='mobile-nav'>
    {
      isBurgerOpen
        ?
        renderMobileMenu(activeNavItem, handleBurgerClick, handleClick, isActive, resumeLink)
        :
        renderBurgerIcon(handleBurgerClick)
    }
  </div>
)

export default MobileMenu
