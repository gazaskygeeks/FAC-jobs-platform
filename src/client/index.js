import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/home';
import Admindashborad from './components/admindashborad';
import './index.css';

ReactDOM.render(
  <HashRouter>
    <div className='app'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/dashborad' component={Admindashborad} />
        <Redirect to='/' />
      </Switch>
    </div>
  </HashRouter>,
  document.getElementById('root')
);
