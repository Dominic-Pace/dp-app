import React from 'react'

import './styles.css'

const Avatar = ({ className, path, style, type }) => (
  <img
    alt={`${type}-avatar`}
    className={`avatar ${type}`}
    src={path}
    style={style}
  />
)

export default Avatar
