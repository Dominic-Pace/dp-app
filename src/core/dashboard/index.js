import React from 'react'
import './styles.css'

const Dashboard = ({ children }) => (
  <div className='welcome dark'>
    <div className='inner'>
      { children }
    </div>
  </div>
)


export default Dashboard
