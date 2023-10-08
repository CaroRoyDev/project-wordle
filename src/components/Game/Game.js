import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessInput from '../GuessInput'
import GuessesBoard from '../GuessesBoard'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { checkGuess } from '../../game-helpers'
import BannerLostGame from '../BannerLostGame'
import BannerWonGame from '../BannerWonGame'
import Keyboard from '../Keyboard'

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS))
  console.info({ answer })
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

  const handleResetGame = () => {
    setGuesses([])
    setGameStatus('running')
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
      <Keyboard guesses={guesses} />
    </>
  )
}

export default Game
