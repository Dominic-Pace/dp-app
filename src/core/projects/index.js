import React from 'react'
import { Col, Row } from 'react-bootstrap'

import Header from '../../components/header'
import Avatar from '../../components/avatar'

import './styles.css'

const ProjectsContent = () => (
  <Col className='content'>
    <Header>Projects</Header>
    <Row className='justify-center'>
      <Avatar
        path='https://media-exp2.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAA3VAAAAJDIzYTRlMThkLTk4YjgtNDZlMC04MjM4LTA1Y2Y3NTA5ZTllYg.jpg'
        type='sm'
      />
    </Row>
  </Col>
)

export default ProjectsContent
