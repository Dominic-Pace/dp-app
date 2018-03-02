import React from 'react'
import { Col, Row } from 'react-bootstrap'

import SquadPic from '../../assets/img/squad.png'
import WirlixPic from '../../assets/img/wirlix.png'

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
        <Col md={2} />
        <Col
          className='justify-center'
          md={4}
        >
          <PortfolioCard
            headerImg='http://www.publicdomainpictures.net/pictures/230000/velka/healthcare.jpg'
            cardTitle='Caféwell Coaching'
          />
          <PortfolioCard
            headerImg='https://cdn-images-1.medium.com/max/1600/1*6Rz95aDqIK09XLa6NppGaw.png'
            cardTitle='Caféwell Central'
          />
        </Col>
        <Col
          className='justify-center'
          md={4}
        >
          <PortfolioCard
            headerImg={WirlixPic}
            cardTitle='Wirlix Mobile'
          />
          <PortfolioCard
            headerImg={SquadPic}
            cardTitle='Squad Mobile App'
          />
        </Col>
        <Col md={2} />
      </Row>
    </Scrollable>
  </Col>
)

export default PortfolioContent
