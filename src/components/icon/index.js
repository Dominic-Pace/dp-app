import React from 'react'
import { Popover, Tooltip } from 'antd'

import ConnectIcon from '../../assets/icons/connect.svg'
import DrinkIcon from '../../assets/icons/drink.svg'
import FacebookIcon from '../../assets/icons/facebook.svg'
import FileIcon from '../../assets/icons/file.svg'
import GithubIcon from '../../assets/icons/github.svg'
import GithubLineIcon from '../../assets/icons/github-line.svg'
import HomeIcon from '../../assets/icons/home.svg'
import LinkedInIcon from '../../assets/icons/linked-in.svg'
import LinkedInLineIcon from '../../assets/icons/li-line.svg'
import MailIcon from '../../assets/icons/mail.svg'
import PortfolioIcon from '../../assets/icons/portfolio.svg'
import ProfileIcon from '../../assets/icons/profile.svg'
import ResumeIcon from '../../assets/icons/resume.svg'
import SunnyIcon from '../../assets/icons/sunny.svg'
import TwitterIcon from '../../assets/icons/twitter.svg'
import TwitterLineIcon from '../../assets/icons/twitter-line.svg'
import XboxIcon from '../../assets/icons/xbox.svg'

import './styles.css'

const types = {
  connect: ConnectIcon,
  drink: DrinkIcon,
  facebook: FacebookIcon,
  file: FileIcon,
  github: GithubLineIcon,
  githubFill: GithubIcon,
  home: HomeIcon,
  portfolio: PortfolioIcon,
  linkedIn: LinkedInLineIcon,
  linkedInFill: LinkedInIcon,
  mail: MailIcon,
  profile: ProfileIcon,
  resume: ResumeIcon,
  sunny: SunnyIcon,
  twitter: TwitterLineIcon,
  twitterFill: TwitterIcon,
  xbox: XboxIcon
}

const Icon = ({ pointer, size, style, type }) => (
  <img
    alt='type'
    className={pointer && 'icon-link'}
    src={types[type]}
    style={style}
    width={size}
  />
)

export const NavMenuIcon = ({ active, onClick, size, titleComponent, type, wrapperClassName }) => (
  <div className={ wrapperClassName === 'menu' ? 'menu-item' : 'nav-item'}>
    <Tooltip
      placement='right'
      title={titleComponent}
    >
      <img
        alt='type'
        className={active ? 'icon-link active' : 'icon-link'}
        onClick={onClick}
        src={types[type]}
        width={size}
      />
    </Tooltip>
  </div>
)

export const NavPopIcon = ({ active, onClick, size, style, tipPlacement, tipText, trigger, type, wrapperClassName }) => (
  <div className={ wrapperClassName === 'menu' ? 'menu-item' : 'nav-item'}>
    <Popover
      content={tipText}
      placement={tipPlacement}
      trigger={trigger}
    >
      <img
        alt='type'
        className={active ? 'icon-link active' : 'icon-link'}
        onClick={onClick}
        src={types[type]}
        style={style}
        width={size}
      />
    </Popover>
  </div>
)

export default Icon
