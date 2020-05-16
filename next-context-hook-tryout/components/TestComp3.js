import React, { Component, useContext } from 'react';

import {GlobalContext} from '../contexts/GlobalContext';

function TestComp3() {
  const {helloworld} = useContext(GlobalContext);
  return(
    <>
      <p>TestComp3</p>
      {helloworld}
    </>
  )
}

export default TestComp3