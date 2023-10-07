import React from 'react'
import { WORD_LENGTH } from '../../constants'
import { range } from '../../utils'

function GuessRow({ guess }) {
  return (
    <p className='guess'>
      {range(WORD_LENGTH).map((_, colIndex) => {
        const cellStatus = guess?.checks[colIndex]
        const cellClasses = cellStatus ? `cell ${cellStatus}` : 'cell'
        return (
          <span className={cellClasses} key={colIndex}>
            {guess?.word[colIndex]}
          </span>
        )
      })}
    </p>
  )
}

export default GuessRow
