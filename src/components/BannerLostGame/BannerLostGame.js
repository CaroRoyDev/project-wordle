import React from 'react'
import Banner from '../Banner'

function BannerLostGame({ answer, children }) {
  return (
    <Banner variant='sad'>
      <p style={{ marginBottom: '10px' }}>
        You lost 😓 The word to guess was <em>{answer}</em>
      </p>
      {children}
    </Banner>
  )
}

export default BannerLostGame
