import React from 'react'
import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import GuessRow from '../GuessRow'

function GuessesBoard({ guesses }) {
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((_, rowIndex) => (
        <GuessRow key={rowIndex} guess={guesses[rowIndex]} />
      ))}
    </div>
  )
}

export default GuessesBoard
