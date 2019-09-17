import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import { appTheme } from './utils/styles/theme'

import './utils/styles/index.css'

import Core from './core'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <ThemeProvider theme={appTheme}>
    <Core />
  </ThemeProvider>,
  document.getElementById('root'))
registerServiceWorker()
