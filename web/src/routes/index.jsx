import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Navbar from '../components/Navbar'
import Landing from '../pages/Landing'

const Routes = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Landing}/>
      </Switch>
    </BrowserRouter>
    </>
  )
};

export default Routes;