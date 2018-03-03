import React from 'react'
import { Row } from 'react-bootstrap'

import Icon from '../../../components/icon'

const ICON_SIZE = 80

const SocialBio = () => (
  <Row className='social justify-center'>
    <a
      href='https://www.facebook.com/deeoohehm'
      rel='noopener noreferrer'
      target='_blank'
    >
      <Icon
        padding={10}
        pointer
        size={ICON_SIZE}
        type='facebook'
      />
    </a>
    <a
      href='https://github.com/Dominic-Pace'
      rel='noopener noreferrer'
      target='_blank'
    >
      <Icon
        padding={10}
        pointer
        size={ICON_SIZE}
        type='githubFill'
      />
    </a>
    <a
      href='https://www.linkedin.com/in/dominic-pace/'
      rel='noopener noreferrer'
      target='_blank'
    >
      <Icon
        padding={10}
        pointer
        size={ICON_SIZE}
        type='linkedInFill'
      />
    </a>
    <a
      href='https://twitter.com/DominicPaceJS'
      rel='noopener noreferrer'
      target='_blank'
    >
      <Icon
        padding={10}
        pointer
        size={ICON_SIZE}
        type='twitterFill'
      />
    </a>
    <a
      href='https://account.xbox.com/en-us/Profile?GamerTag=iServion'
      rel='noopener noreferrer'
      target='_blank'
    >
      <Icon
        padding={10}
        pointer
        size={ICON_SIZE}
        type='xbox'
      />
    </a>
  </Row>
)

export default SocialBio
