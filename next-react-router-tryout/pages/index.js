import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import helloworld1 from '../components/helloworld1';
import helloworld2 from '../components/helloworld2';

function index(){
  return(
    <>
      helloworld
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={helloworld1} />
            <Route exact path='/helloworld2' component={helloworld2} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  )
}

export default index;