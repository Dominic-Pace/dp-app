import React from 'react'

import ConnectIcon from '../../assets/icons/connect.svg'
import FacebookIcon from '../../assets/icons/facebook.svg'
import GithubIcon from '../../assets/icons/github.svg'
import LinkedInIcon from '../../assets/icons/linked-in.svg'
import SunnyIcon from '../../assets/icons/sunny.svg'
import TwitterIcon from '../../assets/icons/twitter.svg'
import XboxIcon from '../../assets/icons/xbox.svg'

import './styles.css'

const types = {
  connect: ConnectIcon,
  facebook: FacebookIcon,
  github: GithubIcon,
  linkedIn: LinkedInIcon,
  sunny: SunnyIcon,
  twitter: TwitterIcon,
  xbox: XboxIcon
}

const Icon = ({ padding, pointer, size, type }) => (
  <img
    alt='type'
    className={pointer && 'icon-link'}
    src={types[type]}
    style={{ paddingRight: padding, paddingLeft: padding }}
    width={size}
  />
)

export default Icon
