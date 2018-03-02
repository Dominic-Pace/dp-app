import React from 'react'
import { Card } from 'antd'

import PortfolioAvatar from './port-avatar'

const { Meta } = Card

const PortfolioCard = ({ avatarType, cardTitle, headerImg, loading, techStack }) => (
  <Card
    bodyStyle={{  backgroundColor: '#e6e6e6', borderRadius: '0 0 10px 10px', padding: 12 }}
    bordered={false}
    className='align-center'
    cover={<img alt={cardTitle} src={headerImg} style={{ borderRadius: '10px 10px 0 0' }}/>}
    hoverable
    loading={loading}
    style={{
      backgroundColor: 'transparent',
      borderRadius: 10,
      boxShadow: 'rgb(160, 160, 159) 0px 2px 10px 2px',
      margin: '5% 7%',
      width: 300
    }}
    title={loading ? 'Loading...' : null}
  >
    <Meta
      avatar={
        <PortfolioAvatar
          size='sm'
          type={avatarType}
        />
      }
      description={
        !loading && techStack.map(tech => (
          <PortfolioAvatar
            size='xxs'
            type={tech}
          />
        ))
      }
      title={cardTitle}
    />
  </Card>
)

export default PortfolioCard
