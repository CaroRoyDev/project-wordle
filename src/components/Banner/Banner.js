import React from 'react'

function Banner({ children, variant }) {
  const bannerClass = variant ? `banner ${variant}` : 'banner'
  return <p className={bannerClass}>{children}</p>
}

export default Banner
