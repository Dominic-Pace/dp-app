import React from 'react'
import ScrollArea from 'react-scrollbar'

const DEFAULT_SCROLL = '88vh'

const getScrollAreaHeight = (height) => (
  height ? `${height}vh` : DEFAULT_SCROLL
)

const Scrollable = ({ children, className, height }) => (
  <ScrollArea
    className={className || 'area'}
    horizontal={false}
    speed={0.8}
    style={{ height: getScrollAreaHeight(height) }}
  >
    {children}
  </ScrollArea>
)

export default Scrollable
