import React from 'react'
import { Card } from 'antd'

import CoverImage from './cover-img'
import PortfolioAvatar from './port-avatar/index'

import '../styles.css'

const { Meta } = Card

const PortfolioCard = ({ avatarType, cardTitle, headerImg, imgLink, loading, techStack }) => (
  <Card
    bodyStyle={{
      backgroundColor: '#e6e6e6',
      borderRadius: '0 0 10px 10px',
      cursor: 'auto',
      padding: 12
    }}
    bordered
    className='portfolio-card'
    cover={
      <CoverImage
        cardTitle={cardTitle}
        headerImg={headerImg}
        imgLink={imgLink}
      />
    }
    hoverable
    loading={loading}
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
