import React from 'react'
import Icon from '../../../components/icon'

import '../styles.css'
const AboutMe = () => (
  <h3 className='about'>
    Software Engineer specializing in ReactJS living in sunny <span>
      <Icon
        size={20}
        type='sunny'
      />
    </span> Austin, TX
  </h3>
)

export default AboutMe
