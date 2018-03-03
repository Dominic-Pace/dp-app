import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'

import CardCol from './card-col'
import Header from '../../components/header'

import PortfolioData from '../../assets/mock/portfolio.json'

import './styles.css'

class PortfolioContent extends Component {
  state = {
    portfolioLeft: [],
    portfolioRight: [],
    portfolioLoad: true
  }

  componentDidMount() {
    this.setState({
      portfolioLeft: PortfolioData.slice(0, Math.ceil(PortfolioData.length / 2)),
      portfolioRight: PortfolioData.slice(Math.ceil(PortfolioData.length / 2), PortfolioData.length),
      portfolioLoad: false
    })
  }

  render () {
    const { portfolioLeft, portfolioRight, portfolioLoad } = this.state

    return (
      <Col className='content'>
        <Header>Project Portfolio</Header>
          <Row className='portfolio-items'>
            <Col md={2} />
            <Col
              className='justify-center'
              md={4}
            >
              <CardCol
                portfolioItems={portfolioLeft}
                loading={portfolioLoad}
              />
            </Col>
            <Col
              className='justify-center'
              md={4}
            >
              <CardCol
                portfolioItems={portfolioRight}
                loading={portfolioLoad}
              />
            </Col>
            <Col md={2} />
          </Row>
      </Col>
    )
  }
}

export default PortfolioContent
