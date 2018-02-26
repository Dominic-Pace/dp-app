import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Flex } from 'reflexbox'

import Dashboard from './dashboard'
import NavBar from '../components/navbar'

import './styles.css'

class Core extends Component {
  render () {
    return (
      <Router>
        <div className='core'>
          <Flex className='container'>
            <NavBar />
            <Route exact path="/" component={Dashboard} />
            <Route path="/bio" component={Dashboard} />
            <Route path="/projects" component={Dashboard} />
            <Route path="/design" component={Dashboard} />
            <Route path="/resume" component={Dashboard} />
          </Flex>
        </div>
      </Router>
    )
  }
}

export default Core
