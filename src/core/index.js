import React, { Component } from 'react'
import { Flex, Box } from 'reflexbox'

import Dashboard from './dashboard'
import NavBar from '../components/navbar'

import './styles.css'

class Core extends Component {
  render () {
    return (
      <div className='core'>
        <Flex className='container'>
          <Box>
            <NavBar />
          </Box>
          <Dashboard />
        </Flex>
      </div>
    )
  }
}

export default Core
