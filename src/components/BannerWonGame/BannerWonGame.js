import React from 'react'
import Banner from '../Banner'

function BannerWonGame({ guessCount }) {
  return (
    <Banner variant='happy'>
      <p> Congratulations 🥳 Got it in {guessCount > 1 ? `${guessCount} guesses` : '1 guess'}</p>
    </Banner>
  )
}

export default BannerWonGame
