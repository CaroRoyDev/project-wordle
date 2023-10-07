import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessInput from '../GuessInput'
import GuessesBoard from '../GuessesBoard'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { checkGuess } from '../../game-helpers'
// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const [gameStatus, setGameStatus] = React.useState({
    isOver: false,
    won: false,
  })

  const handleSubmitGuess = guessInput => {
    if (gameStatus.isOver) return

    const checkedLetters = checkGuess(guessInput, answer)

    const newGuess = {
      word: guessInput,
      checks: checkedLetters.map(({ status }) => status),
    }

    const nextGuesses = [...guesses, newGuess]
    setGuesses(nextGuesses)

    if (checkedLetters.every(letter => letter.status === 'correct')) {
      setGameStatus({ ...gameStatus, isOver: true, won: true })
      return
    }

    if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED)
      setGameStatus({ ...gameStatus, isOver: true })
  }
  return (
    <>
      {gameStatus.isOver && <p>Game finished : You {gameStatus.won ? 'won ! 🥳' : 'lost 😓 '}</p>}
      {gameStatus.isOver && !gameStatus.won && <p>Answer was : {answer}</p>}
      <GuessesBoard guesses={guesses} />
      <GuessInput onSubmitGuess={handleSubmitGuess} />
    </>
  )
}

export default Game
