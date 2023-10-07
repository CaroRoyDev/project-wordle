import React from 'react'
import Banner from '../Banner'

function BannerWonGame({ guessCount, children }) {
  return (
    <Banner variant='happy'>
      <p style={{ marginBottom: '10px' }}>
        Congratulations 🥳 Got it in {guessCount > 1 ? `${guessCount} guesses` : '1 guess'}
      </p>
      {children}
    </Banner>
  )
}

export default BannerWonGame
