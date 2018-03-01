import React from 'react'
import { Col, Row } from 'react-bootstrap'

import Avatar  from '../../components/avatar'
import Experience from './experience'
import Header from '../../components/header'
import Icon from '../../components/icon'
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
          path='https://media-exp2.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAA3VAAAAJDIzYTRlMThkLTk4YjgtNDZlMC04MjM4LTA1Y2Y3NTA5ZTllYg.jpg'
          style={{ marginLeft: '15%' }}
          type='xl'
        />
      </Col>
      <Col md={8}>
        <Header>Dominic Pace</Header>
        <SocialBio />
        <h3>Software Engineer specializing in ReactJS living in sunny <span>
          <Icon
            size={30}
            type='sunny'
          />
        </span> Austin, TX</h3>
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