import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Flex } from 'reflexbox'

import NavBar from '../components/navbar'
import { RouteWithSubRoutes } from '../utils/router'

import routes from './routes'
import './styles.css'

class Core extends Component {
  render () {
    return (
      <Router>
        <div className='core'>
          <Flex className='container'>
            <NavBar />
            {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
          </Flex>
        </div>
      </Router>
    )
  }
}

export default Core
