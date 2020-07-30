import React from 'react';
import {Login} from './components/page/Login';
import {Register} from './components/page/register';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";




export const App= ()=> {
    return (
      <Router>
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
      </Router>
    );
  }

 


