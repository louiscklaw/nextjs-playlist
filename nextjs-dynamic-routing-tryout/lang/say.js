import React from 'react';

import en from './en.json'
import zh from './zh.json'

function say(lang){
  if (lang == 'zh'){
    return zh.hello
  }else{
    return en.hello
  }
}

export {say}