import React from 'react'

import BulbIcon from '../../assets/icons/lightbulb.svg'
import FileIcon from '../../assets/icons/file.svg'
import HomeIcon from '../../assets/icons/home.svg'
import ProfileIcon from '../../assets/icons/profile.svg'
import SunnyIcon from '../../assets/icons/sunny.svg'

import './styles.css'

const types = {
  home: HomeIcon,
  file: FileIcon,
  lightbulb: BulbIcon,
  profile: ProfileIcon,
  sunny: SunnyIcon

}

const Icon = ({ pointer, size, type }) => (
  <img
    className={pointer && 'icon-link'}
    src={types[type]}
    width={size}
  />
)

export default Icon
