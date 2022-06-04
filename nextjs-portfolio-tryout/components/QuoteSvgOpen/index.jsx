import * as React from 'react'
import QuoteSvgOpenObj from './quotes_open.svg'

export default function QuoteSvgOpen() {
  return (
    <img
      src={QuoteSvgOpenObj.src}
      style={{
        opacity: 0.5,
        maxWidth: '66%',
        width: 'auto',
        height: 'auto',
        position: 'relative',
        top: '-2rem',
        transform: 'rotate(180deg)',
      }}
    />
  )
}
