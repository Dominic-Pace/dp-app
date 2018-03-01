import React from 'react'
import { Col } from 'react-bootstrap'

import Header from '../../../components/header'
import Icon from '../../../components/icon'
import SocialBio from '../social'

const Bio = () => (
  <div id='bio-overview'>
    <Header>Dominic Pace</Header>
    <SocialBio />
    <h3>Software Engineer specializing in ReactJS living in sunny <span>
          <Icon
            size={30}
            type='sunny'
          />
        </span> Austin, TX</h3>
  </div>
)

export default Bio
