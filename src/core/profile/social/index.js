import React from 'react'
import { Row } from 'react-bootstrap'

import Icon from '../../../components/icon'

const ICON_SIZE = 48
const RESUME = 'https://firebasestorage.googleapis.com/v0/b/dp-app-2b9c3.appspot.com/o/Dominic%20Pace%20-%20Resume.pdf?alt=media&token=4fc3f3c8-a611-4ddd-91a8-0b7c80db87bc'

const SocialBio = () => (
  <Row className='social justify-center'>
    <a
      href='https://github.com/Dominic-Pace'
      rel='noopener noreferrer'
      target='_blank'
    >
      <Icon
        pointer
        size={ICON_SIZE}
        style={{ padding: 5 }}
        type='githubFill'
      />
    </a>
    <a
      href='https://www.linkedin.com/in/dominic-pace/'
      rel='noopener noreferrer'
      target='_blank'
    >
      <Icon
        pointer
        size={ICON_SIZE}
        style={{ padding: 5 }}
        type='linkedInFill'
      />
    </a>
    <a
      href='https://twitter.com/DominicPaceJS'
      rel='noopener noreferrer'
      target='_blank'
    >
      <Icon
        pointer
        size={ICON_SIZE}
        style={{ padding: 5 }}
        type='twitterFill'
      />
    </a>
    <a
      href='https://account.xbox.com/en-us/Profile?GamerTag=iServion'
      rel='noopener noreferrer'
      target='_blank'
    >
      <Icon
        pointer
        size={ICON_SIZE}
        style={{ padding: 5 }}
        type='xbox'
      />
    </a>
    <a href={RESUME} target='_blank'>
      <Icon
        pointer
        size={35}
        style={{ marginLeft: 3, marginTop: 2, padding: 5 }}
        type='resume'
      />
    </a>
  </Row>
)

export default SocialBio
