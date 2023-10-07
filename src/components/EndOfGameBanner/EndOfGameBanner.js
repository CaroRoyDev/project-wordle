import React from 'react'

function EndOfGameBanner({ gameStatus, answer, guessCount }) {
  const isWon = gameStatus === 'won'
  const winContent = `Congratulations 🥳 Got it in ${guessCount} guesses`
  const loseContent = (
    <>
      You lost 😓 The word to guess was <em>{answer}</em>
    </>
  )
  return <p className={`banner ${isWon ? 'happy' : 'sad'}`}>{isWon ? winContent : loseContent}</p>
}

export default EndOfGameBanner
