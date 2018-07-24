import React from 'react'
import { Row } from 'react-bootstrap'

import Icon from '../../../components/icon'

const ICON_SIZE = 48
const RESUME = 'https://firebasestorage.googleapis.com/v0/b/dp-app-440b6.appspot.com/o/DominicPaceResume.jpg?alt=media&token=b6f0abef-6438-462c-bc47-870ef2f574af'

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
