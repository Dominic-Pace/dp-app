import React from 'react'
import { Timeline } from 'antd'

const COMPLETE_COLOR = '#52c41a'

const BioTimeline = () => (
  <Timeline>
    <Timeline.Item color='yellow'>
      <p>2018 - Austin, TX here I come! Currently seeking a new bad ass position!</p>
    </Timeline.Item>
    <Timeline.Item color={COMPLETE_COLOR}>
      <p>2017 - Built out multiple professional consumer facing applications from the ground up for <a href='https://www.welltok.com' rel='noopener noreferrer' target='_blank' >Welltok Inc.</a> First time consulting.</p>
    </Timeline.Item>
    <Timeline.Item color={COMPLETE_COLOR}>
      <p>2016 - Tried React for the first time. Fell in love. This led me to transition from Automation to Software Development.</p>
    </Timeline.Item>
    <Timeline.Item color={COMPLETE_COLOR} style={{ padding: 0 }}>
      <p>2015 - Graduated college with 2 degrees. Landed first job building automation frameworks using Java and Selenium at <a href='https://www.ipswitch.com' rel='noopener noreferrer' target='_blank'>Ipswitch Inc.</a></p>
    </Timeline.Item>
  </Timeline>
)

export default BioTimeline
