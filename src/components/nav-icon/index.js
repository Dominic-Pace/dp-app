import React from 'react'
import { Popover } from 'antd'

import BulbIcon from '../../assets/icons/lightbulb.svg'
import ConnectIcon from '../../assets/icons/connect.svg'
import FacebookIcon from '../../assets/icons/facebook.svg'
import FileIcon from '../../assets/icons/file.svg'
import GithubIcon from '../../assets/icons/github.svg'
import LinkedInIcon from '../../assets/icons/linked-in.svg'
import HomeIcon from '../../assets/icons/home.svg'
import ProfileIcon from '../../assets/icons/profile.svg'

import '../navbar/styles.css'

const types = {
  connect: ConnectIcon,
  facebook: FacebookIcon,
  github: GithubIcon,
  home: HomeIcon,
  file: FileIcon,
  lightbulb: BulbIcon,
  linkedIn: LinkedInIcon,
  profile: ProfileIcon
}

const NavIcon = ({ active, onClick, pointer, size, tipPlacement, tipText, type }) => (
  <div className='nav-item'>
    <Popover
      content={tipText}
      placement={tipPlacement}
    >
      <img
        alt='type'
        className={active ? 'icon-link active' : 'icon-link'}
        onClick={onClick}
        src={types[type]}
        width={size}
      />
    </Popover>
  </div>
)

export default NavIcon
