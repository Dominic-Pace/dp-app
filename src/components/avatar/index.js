import React from 'react'
import { Popover } from 'antd'

import './styles.css'

const Avatar = ({ className, path, style, type }) => (
  <img
    alt={`${type}-avatar`}
    className={`avatar ${type}`}
    src={path}
    style={style}
  />
)

export const PopAvatar = ({ className, path, style, tipText, type }) => (
  <Popover
    content={tipText}
    trigger='hover'
  >
    <img
      alt={`${type}-avatar`}
      className={`avatar ${type}`}
      src={path}
      style={style}
    />
  </Popover>
)

export default Avatar
