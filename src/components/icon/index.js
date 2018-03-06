import React from 'react'
import { Popover, Tooltip } from 'antd'

import CloseIcon from '../../assets/icons/close.svg'
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
import MenuIcon from '../../assets/icons/menu.svg'
import PortfolioIcon from '../../assets/icons/portfolio.svg'
import ProfileIcon from '../../assets/icons/profile.svg'
import ResumeIcon from '../../assets/icons/resume.svg'
import SunnyIcon from '../../assets/icons/sunny.svg'
import TwitterIcon from '../../assets/icons/twitter.svg'
import TwitterLineIcon from '../../assets/icons/twitter-line.svg'
import XboxIcon from '../../assets/icons/xbox.svg'

import './styles.css'

const types = {
  close: CloseIcon,
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
  menu: MenuIcon,
  profile: ProfileIcon,
  resume: ResumeIcon,
  sunny: SunnyIcon,
  twitter: TwitterLineIcon,
  twitterFill: TwitterIcon,
  xbox: XboxIcon
}

const Icon = ({ onClick, pointer, size, style, type }) => (
  <img
    alt='type'
    className={(pointer && type === 'menu' ? 'mobile-menu' : (pointer ? 'icon-link' : null))}
    onClick={onClick}
    src={types[type]}
    style={style}
    width={size}
  />
)

export const MobileNavIcon = ({ active, onClick, size, style, tipText, type }) => (
  <div className='mobile-icon'>
    <img
      alt='type'
      className={ active ? 'icon-link active-mobile' : 'icon-link' }
      onClick={onClick}
      src={types[type]}
      style={style}
      width={size}
    />
    <p>{tipText}</p>
  </div>
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

export const NavPopIcon = ({ active, mobile, onClick, size, style, tipPlacement, tipText, trigger, type, wrapperClassName }) => (
  <div className={ wrapperClassName === 'menu' ? 'menu-item' : 'nav-item'}>
    <Popover
      content={tipText}
      placement={tipPlacement}
      trigger={trigger}
    >
      <img
        alt='type'
        className={ active ? (mobile ? 'icon-link active-mobile' : 'icon-link active') : 'icon-link' }
        onClick={onClick}
        src={types[type]}
        style={style}
        width={size}
      />
    </Popover>
  </div>
)

export default Icon
