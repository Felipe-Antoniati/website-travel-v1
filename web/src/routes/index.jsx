import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from '../components/Navbar'

const Routes = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact />
      </Switch>
    </BrowserRouter>
    </>
  )
};

export default Routes;