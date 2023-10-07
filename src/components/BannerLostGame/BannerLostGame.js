import React from 'react'
import Banner from '../Banner'

function BannerLostGame({ answer }) {
  return <Banner variant='sad'>You lost 😓 The word to guess was {answer}</Banner>
}

export default BannerLostGame
