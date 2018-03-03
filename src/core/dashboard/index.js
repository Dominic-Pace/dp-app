import React from 'react'
import { Row } from 'react-bootstrap'

import Header from '../../components/header'
import Avatar from '../../components/avatar'
import Quote from '../../components/quote'


import './styles.css'

const DashboardContent = () => (
  <Col className='content'>
    <Header>Dominic Pace</Header>
    <Row className='justify-center'>
      <Avatar
        path='https://media-exp2.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAA3VAAAAJDIzYTRlMThkLTk4YjgtNDZlMC04MjM4LTA1Y2Y3NTA5ZTllYg.jpg'
        type='md'
      />
    </Row>
    <Row className='justify-center'>
      <Quote>The best thing about a boolean is even if you are wrong, you are only off by a bit.</Quote>
    </Row>
  </Col>
)

export default DashboardContent
