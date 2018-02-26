import React from 'react'

import SunnyIcon from '../../assets/icons/sunny.svg'

import './styles.css'

const types = {
  sunny: SunnyIcon
}

const Icon = ({ pointer, size, type }) => (
  <img
    alt='type'
    className={pointer && 'icon-link'}
    src={types[type]}
    width={size}
  />
)

export default Icon
