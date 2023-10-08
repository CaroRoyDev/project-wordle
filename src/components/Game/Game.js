import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessInput from '../GuessInput'
import GuessesBoard from '../GuessesBoard'
import { NUM_OF_GUESSES_ALLOWED, QWERTY_ROWS } from '../../constants'
import { checkGuess } from '../../game-helpers'
import BannerLostGame from '../BannerLostGame'
import BannerWonGame from '../BannerWonGame'
import Keyboard from '../Keyboard'

const initialKeysStatus = QWERTY_ROWS.reduce((acc, row) => {
  row.forEach(letter => {
    acc[letter] = 'unused'
  })
  return acc
}, {})

function Game() {
  //TODO - Refacto this state with a reducer
  const [answer, setAnswer] = React.useState(sample(WORDS))
  const [guesses, setGuesses] = React.useState([])
  const [gameStatus, setGameStatus] = React.useState('running')
  const [keysStatus, setKeysStatus] = React.useState(initialKeysStatus)
  console.info({ answer })
  const handleSubmitGuess = guessInput => {
    // Ignore if game is finished
    if (gameStatus !== 'running') return

    // Check new guess against answer
    const checkedLetters = checkGuess(guessInput, answer)

    // Update keys tracking for keyboard
    // TODO - Implement status priority when duplicates in the same guess
    // eg: Answer is 'money', and guess is 'monon'
    // Currently, the 'n' ans 'o' keys will be marked as 'incorrect' instead of 'correct'
    // Same goes for missplaced letters
    // Should prioritize
    // 1. Missplaced
    // 2. Correct
    // 3. Incorrect
    // To check with fake answers having duplicates letter

    const nextKeysStatus = {
      ...keysStatus,
      ...checkedLetters.reduce((acc, { letter, status }) => {
        acc[letter] = status
        return acc
      }, {}),
    }
    setKeysStatus(nextKeysStatus)

    // Update guesses tracking
    const newGuess = {
      word: guessInput,
      checks: checkedLetters.map(({ status }) => status),
    }
    const nextGuesses = [...guesses, newGuess]
    setGuesses(nextGuesses)

    // Handle game status
    if (checkedLetters.every(letter => letter.status === 'correct')) setGameStatus('won')
    else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) setGameStatus('lost')
  }

  const handleResetGame = () => {
    setGuesses([])
    setGameStatus('running')
    setKeysStatus(initialKeysStatus)
    setAnswer(sample(WORDS))
  }

  return (
    <>
      {gameStatus === 'lost' && (
        <BannerLostGame answer={answer}>
          <button onClick={handleResetGame}>Play Again</button>
        </BannerLostGame>
      )}
      {gameStatus === 'won' && (
        <BannerWonGame guessCount={guesses.length}>
          <button onClick={handleResetGame}>Play Again</button>
        </BannerWonGame>
      )}
      <GuessesBoard guesses={guesses} />
      <GuessInput onSubmitGuess={handleSubmitGuess} disabled={gameStatus !== 'running'} />
      <Keyboard keysStatus={keysStatus} />
    </>
  )
}

export default Game
