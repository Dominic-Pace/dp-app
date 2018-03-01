import React from 'react'
import ScrollArea from 'react-scrollbar'

const DEFAULT_SCROLL = '90vh'

const getScrollAreaHeight = (height) => (
  height ? `${height}vh` : DEFAULT_SCROLL
)

const Scrollable = ({ children, className, height }) => (
  <ScrollArea
    className={className || 'area'}
    horizontal={false}
    speed={0.5}
    style={{ height: getScrollAreaHeight(height), paddingTop: 20 }}
  >
    {children}
  </ScrollArea>
)

export default Scrollable
