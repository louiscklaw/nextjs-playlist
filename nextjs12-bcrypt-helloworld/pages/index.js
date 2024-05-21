import { StrictMode } from 'react'

import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  let [test, setTest] = useState(0)
  function handleClick() {
    console.log('helloworld click')
    setTest(test + 1)
  }

  return (
    <StrictMode>
      <div>aaaa</div>
      <button onClick={handleClick}>test</button>
    </StrictMode>
  )
}
