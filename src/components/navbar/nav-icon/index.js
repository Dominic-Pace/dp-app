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

const NavIcon = ({ type, tipText }) => (
  <div className='nav-item'>
    <Popover
      placement='right'
      content={tipText}
    >
      <img
        className='nav-icon'
        src={types[type]}
        width={38}
      />
    </Popover>
  </div>
)

export default NavIcon




