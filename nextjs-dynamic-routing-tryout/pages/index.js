import React from 'react';
import Router from 'next/router';

function index(){
  React.useEffect(() => {
    Router.replace('/[lang]','/en')
  })
  return(
    <div>
      index helloworld
    </div>
  )
}

export default index