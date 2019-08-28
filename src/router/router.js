import React from "react";
import {HashRouter, Route, Switch} from 'react-router-dom';
import login from '../view/login'
import register from '../view/register'

function BasicRoute() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={login} />
        <Route exact path="/register" component={register} />
      </Switch>
    </HashRouter>
  );
}

export default BasicRoute