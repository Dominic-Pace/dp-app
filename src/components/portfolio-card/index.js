import React from 'react'
import { Card, Avatar } from 'antd'

const { Meta } = Card

const PortfolioCard = ({ cardTitle, headerImg }) => (
  <Card
    bodyStyle={{  backgroundColor: '#e6e6e6', borderRadius: '0 0 10px 10px' }}
    bordered={false}
    className='align-center'
    cover={<img alt={cardTitle} src={headerImg} style={{ borderRadius: '10px 10px 0 0' }}/>}
    hoverable
    style={{ backgroundColor: 'transparent', borderRadius: 10, margin: '0 7%', padding: '8px 0', width: 300 }}
  >
    <Meta
      description={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title={cardTitle}
    />
  </Card>
)

export default PortfolioCard
