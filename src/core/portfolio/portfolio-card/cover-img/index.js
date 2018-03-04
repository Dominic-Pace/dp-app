import React from 'react'

import '../../styles.css'

const CoverImage = ({ cardTitle, headerImg, imgLink }) => (
  <a
    className='port-img-container'
    href={imgLink}
    target='_blank'
  >
    <img
      alt={cardTitle}
      className='portfolio-img'
      src={headerImg}
    />
    <div className='overlay'>
      <div className='text'>
        Learn More
      </div>
    </div>
  </a>

)

export default CoverImage
