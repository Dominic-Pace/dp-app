import React from 'react'
import { Popover } from 'antd'

import Icon from '../../icon'

import '../styles.css'


const NavIcon = ({ pointer, size, type, tipText }) => (
  <div className='nav-item'>
        <Popover
          placement='right'
          content={tipText}
        >
          <Icon
            pointer={pointer}
            size={size}
            type={type}
          />
        </Popover>
  </div>
)

export default NavIcon
