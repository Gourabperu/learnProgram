import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {Register} from '../src/components/pages/register';
import {Login} from '../src/components/pages/login';
import {GenerateToken} from '../src/components/pages/genaratetoken';




export const App= ()=> {
    return (
      <Router>
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/gtoken">
              <GenerateToken />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
      </Router>
    );
  }

