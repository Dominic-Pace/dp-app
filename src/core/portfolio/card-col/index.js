import React from 'react'
import PortfolioCard from '../../../components/portfolio-card'

const renderItems = (portfolioItems) => {
  return portfolioItems.map(portfolio => (
      <PortfolioCard
        avatarType={portfolio.techStack[0]}
        cardTitle={portfolio.name}
        headerImg={portfolio.imgUrl}
        key={portfolio.name}
        techStack={portfolio.techStack.slice(1,6)}
      />
    )
  )
}

const CardCol = ({ loading, portfolioItems }) => (
  loading ? <PortfolioCard loading/> : renderItems(portfolioItems)
)

export default CardCol
