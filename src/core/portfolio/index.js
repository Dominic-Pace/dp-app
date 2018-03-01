import React from 'react'
import { Col, Row } from 'react-bootstrap'

import Header from '../../components/header'
import PortfolioCard from '../../components/portfolio-card'
import Scrollable from '../../components/scrollable'

import './styles.css'

const PortfolioContent = () => (
  <Col className='content'>
    <Header>Project Portfolio</Header>
    <Scrollable
      height={75}
    >
      <Row className='portfolio-items'>
      </Row>
    </Scrollable>
  </Col>
)

export default PortfolioContent
