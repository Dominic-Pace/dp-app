import React from 'react'

import PortfolioCard from '../portfolio-card'

const renderItems = (portfolioItems) => {
  return portfolioItems.map(portfolio => (
    <PortfolioCard
      avatarType={portfolio.language}
      cardTitle={portfolio.name}
      headerImg={portfolio.imgUrl}
      imgLink={portfolio.imgLink}
      key={portfolio.name}
      techStack={portfolio.techStack.slice(0, 6)}
    />
  ))
}

const CardCol = ({ loading, portfolioItems }) => (
  loading ? <PortfolioCard loading/> : renderItems(portfolioItems)
)

export default CardCol
