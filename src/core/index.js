import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Grid, Row } from 'react-bootstrap'

import Profile from './profile'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
import { RouteWithSubRoutes } from '../utils/router'

import routes from './routes'
import './styles.css'

class Core extends Component {
  state = {
    activeNavItem: 'profile'
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
            <Row style={{ height: '98%'}}>
              <NavBar
                activeNavItem={activeNavItem}
                handleClick={this.handleNavItemClick}
              />
              <Route exact path="/" component={Profile} />
              {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
              <Row
                className='container justify-center'
                style={{ height: '2%'}}
              >
                <Footer />
              </Row>
            </Row>
          </Grid>
        </div>
      </Router>
    )
  }
}

export default Core
