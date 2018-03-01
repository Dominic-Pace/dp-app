import React from 'react'
import { Flex } from 'reflexbox'

import Header from '../../components/header'
import LargeAvatar from '../../components/large-avatar'

import './styles.css'

const ProjectsContent = () => (
  <Flex
    align='center'
    column
    p={2}
    w={0.9}
  >
    <Header>Projects</Header>
    <Flex justify='center'>
      <LargeAvatar path='https://media-exp2.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAA3VAAAAJDIzYTRlMThkLTk4YjgtNDZlMC04MjM4LTA1Y2Y3NTA5ZTllYg.jpg'/>
    </Flex>
  </Flex>
)

export default ProjectsContent
