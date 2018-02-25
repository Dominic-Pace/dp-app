import React, { Component } from 'react'

import Dashboard from './dashboard'
import NavBar from '../components/navbar'

import './styles.css'

class Core extends Component {
  render () {
    return (
      <Dashboard>
        <NavBar />
      </Dashboard>
    )
  }
}

export default Core
