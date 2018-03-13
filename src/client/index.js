import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/home';

ReactDOM.render(
  <HashRouter>
    <div className='app'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Redirect to='/' />
      </Switch>
    </div>
  </HashRouter>,
  document.getElementById('root')
);
