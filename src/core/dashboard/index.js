import React from 'react'
import { Flex } from 'reflexbox'

import Header from '../../components/header'
import Icon from '../../components/icon'
import LargeAvatar from '../../components/large-avatar'

import './styles.css'

const DasboardContent = () => (
  <Flex
    align='center'
    column
    p={4}
    w={0.9}
  >
    <Header>Dominic Pace</Header>
    <Flex justify='center'>
      <LargeAvatar path='https://media-exp2.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAA3VAAAAJDIzYTRlMThkLTk4YjgtNDZlMC04MjM4LTA1Y2Y3NTA5ZTllYg.jpg'/>
    </Flex>
    <h3 className='bio-overview'>Software Engineer specializing in Javascript living in sunny <span>
    <Icon
      size={30}
      type='sunny'
    /></span> Austin, TX</h3>
  </Flex>
)

export default DasboardContent
