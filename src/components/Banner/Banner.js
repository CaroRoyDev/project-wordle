import React from 'react'

function Banner({ children, variant }) {
  const bannerClass = variant ? `banner ${variant}` : 'banner'
  return <div className={bannerClass}>{children}</div>
}

export default Banner
