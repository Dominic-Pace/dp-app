import React from 'react'

import { NavPopIcon } from '../../../components/icon/index'

import '../styles.css'

const getIconSize = (active) => (
  active ? 39 : 32
)

const isActive = (active, icon) => (
  active === icon
)

const ContactMenu = ({ active, resumeLink }) => (
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
    <a href={resumeLink} target='_blank'>
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

export default ContactMenu
