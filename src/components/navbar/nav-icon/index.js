import React from 'react'
import { Popover } from 'antd'

import BulbIcon from '../../../assets/icons/lightbulb.svg'
import FileIcon from '../../../assets/icons/file.svg'
import HomeIcon from '../../../assets/icons/home.svg'
import ProfileIcon from '../../../assets/icons/profile.svg'

import '../styles.css'

const types = {
  home: HomeIcon,
  file: FileIcon,
  lightbulb: BulbIcon,
  profile: ProfileIcon
}

const NavIcon = ({ pointer, size, type, tipText }) => (
  <div className='nav-item'>
    <Popover
      content={tipText}
      placement='right'
    >
      <img
        alt='type'
        className='icon-link'
        src={types[type]}
        width={size}
      />
    </Popover>
  </div>
)

export default NavIcon
