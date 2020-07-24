import React from 'react'

// This is our initialised `NextI18Next` instance
import { Router } from '../i18n'

const SomeButton = () => (
  <button
    onClick={() => Router.push('/page1')}
  >
    This will magically prepend locale subpaths
  </button>
)

export default SomeButton;