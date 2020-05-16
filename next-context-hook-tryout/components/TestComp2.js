import React, { Component, useContext } from 'react';

import {GlobalContext} from '../contexts/GlobalContext';

import InputBox from './InputBox';

function TestComp2() {
  const {changeTheWorld} = useContext(GlobalContext);


  return(
    <>
      <p>TestComp2</p>
      <InputBox onChange={changeTheWorld}></InputBox>
    </>
  )
}

export default TestComp2