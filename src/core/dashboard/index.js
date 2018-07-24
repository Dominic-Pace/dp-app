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
        path='../../assets/img/dp-avatar.jpg'
        type='md'
      />
    </Row>
    <Row className='justify-center'>
      <Quote>The best thing about a boolean is even if you are wrong, you are only off by a bit.</Quote>
    </Row>
  </Col>
)

export default DashboardContent
