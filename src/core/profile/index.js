import React from 'react'
import { Col, Row } from 'react-bootstrap'

import AboutMe from './about'
import Avatar  from '../../components/avatar'
import Experience from './experience'
import Header from '../../components/header'
import SocialBio from './social'
import Timeline from './timeline'

import './styles.css'

const BioContent = () => (
  <Col className='content'>
    <Row className='bio-top'>
      <Col
        className='justify-center'
        md={4}
      >
        <Avatar
          path='https://avatars2.githubusercontent.com/u/12464763?s=460&v=4'
          style={{ marginLeft: '10%' }}
          type='xl'
        />
      </Col>
      <Col md={8}>
        <Header>Dominic Pace</Header>
        <SocialBio />
        <AboutMe />
      </Col>
    </Row>

    <Row className='bio-bottom'>
      <Col
        className='justify-center'
        md={8}
      >
        <Experience />
      </Col>
      <Col md={4}>
        <Timeline />
      </Col>
    </Row>
  </Col>
)

export default BioContent
