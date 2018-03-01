import React from 'react'

import './styles.css'

const Quote = ({ children }) => (
  <i>{`"${children}"`}</i>
)

export default Quote
