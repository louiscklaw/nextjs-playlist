import React, { Component } from 'react';

function InputBox(props){
  console.log(props);

  function handleOnChange(e){
    e.preventDefault();
    props.onChange(e.target.value)
  }

  return(
    <input defaultValue='123321' onChange={(e) => handleOnChange(e)}/>
  )
}

export default InputBox;