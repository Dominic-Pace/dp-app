import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import WebMenu from './web-menu'
import MobileMenu from './mobile-menu'

import './styles.css'

const RESUME = 'https://firebasestorage.googleapis.com/v0/b/dp-app-2b9c3.appspot.com/o/Dominic%20Pace%20-%20Resume.jpg?alt=media&token=4cdce119-58da-4c9c-a8af-729e7eb7789a'

const getIconSize = (active) => (
  active ? 39 : 32
)

const isActive = (active, icon) => (
  active === icon
)

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  renderSideNav() {
    const { activeNavItem, handleClick } = this.props
    return (
      <WebMenu
        activeNavItem={activeNavItem}
        getIconSize={getIconSize}
        handleClick={handleClick}
        isActive={isActive}
        resumeLink={RESUME}
      />
    )
  }

  renderMobileNav() {
    const { activeNavItem, handleBurgerClick, handleMobileNavClick, isBurgerOpen } = this.props
    return (
      <MobileMenu
        activeNavItem={activeNavItem}
        getIconSize={getIconSize}
        handleBurgerClick={handleBurgerClick}
        handleClick={handleMobileNavClick}
        isActive={isActive}
        isBurgerOpen={isBurgerOpen}
        resumeLink={RESUME}
      />
    )
  }

  render() {
    const { width } = this.state
    return (
      width > 600
        ?
        this.renderSideNav()
        :
        this.renderMobileNav()
    )
  }
}

export default withRouter(NavBar)
