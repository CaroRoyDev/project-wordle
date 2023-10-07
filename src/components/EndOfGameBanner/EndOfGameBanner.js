import React from 'react'

function EndOfGameBanner({ isWin, answer, guessCount }) {
  const winContent = `Congratulations 🥳 Got it in ${guessCount} guesses`
  const loseContent = (
    <>
      You lost 😓 The word to guess was <em>{answer}</em>
    </>
  )
  return <p className={`banner ${isWin ? 'happy' : 'sad'}`}>{isWin ? winContent : loseContent}</p>
}

export default EndOfGameBanner
