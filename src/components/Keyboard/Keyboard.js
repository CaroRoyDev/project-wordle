import React from 'react'
import { QWERTY_ROWS } from '../../constants'

function Keyboard({ keysStatus }) {
  return (
    <div className='keyboard'>
      {QWERTY_ROWS.map(row => (
        <div key={row} className='keyboard_row'>
          {row.map(letter => (
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
