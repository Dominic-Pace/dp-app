import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Grid, Row } from 'react-bootstrap'

import Dashboard from './dashboard'
import NavBar from '../components/navbar'
import { RouteWithSubRoutes } from '../utils/router'

import routes from './routes'
import './styles.css'

class Core extends Component {
  state = {
    activeNavItem: 'home'
  }

  handleNavItemClick = (navItem) => {
    this.setState({ activeNavItem: navItem })
  }

  render () {
    const { activeNavItem } = this.state

    return (
      <Router>
        <div className='core'>
          <Grid>
            <Row>
              <NavBar
                activeNavItem={activeNavItem}
                handleClick={this.handleNavItemClick}/>
              <Route exact path="/" component={Dashboard} />
              {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
            </Row>
          </Grid>
        </div>
      </Router>
    )
  }
}

export default Core
