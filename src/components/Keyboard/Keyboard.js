import React from 'react'

const QWERTY_ROWS = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
const initialKeysStatus = QWERTY_ROWS.reduce((acc, row) => {
  row.split('').forEach(letter => {
    acc[letter] = 'unused'
  })
  return acc
}, {})

function Keyboard({ guesses }) {
  const keysStatus = guesses.reduce(
    (acc, { word, checks }) => {
      word.split('').forEach((letter, index) => {
        acc[letter.toLowerCase()] = checks[index]
      })
      return acc
    },
    { ...initialKeysStatus }
  )

  console.log(keysStatus)

  return (
    <div className='keyboard'>
      {QWERTY_ROWS.map(row => (
        <div key={row} className='keyboard_row'>
          {row.split('').map(letter => (
            <div key={letter} className={`keyboard_key ${keysStatus[letter]}`}>
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Keyboard
