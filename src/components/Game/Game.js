import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessInput from '../GuessInput'
import GuessesBoard from '../GuessesBoard'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { checkGuess } from '../../game-helpers'
import BannerLostGame from '../BannerLostGame'
import BannerWonGame from '../BannerWonGame'
// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const [gameStatus, setGameStatus] = React.useState('running')

  const handleSubmitGuess = guessInput => {
    if (gameStatus !== 'running') return

    const checkedLetters = checkGuess(guessInput, answer)

    const newGuess = {
      word: guessInput,
      checks: checkedLetters.map(({ status }) => status),
    }

    const nextGuesses = [...guesses, newGuess]
    setGuesses(nextGuesses)

    if (checkedLetters.every(letter => letter.status === 'correct')) setGameStatus('won')
    else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) setGameStatus('lost')
  }
  return (
    <>
      {gameStatus === 'lost' && <BannerLostGame answer={answer} />}
      {gameStatus === 'won' && <BannerWonGame guessCount={guesses.length} />}
      <GuessesBoard guesses={guesses} />
      <GuessInput onSubmitGuess={handleSubmitGuess} disabled={gameStatus !== 'running'} />
    </>
  )
}

export default Game
