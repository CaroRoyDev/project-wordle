import React from 'react'
import Banner from '../Banner'

function BannerLostGame({ answer }) {
  return (
    <Banner variant='sad'>
      <p>You lost 😓 The word to guess was {answer}</p>
    </Banner>
  )
}

export default BannerLostGame
