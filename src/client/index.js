import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import store from './store';
import Form from './components/greencomp';
import Settings from './components/settings';

import './index.css';
ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div className='app'>
        <Switch>
          <Route exact path='/' component={Form} />
          <Route exact path='/setting' component={Settings} />
          <Redirect to='/' />
        </Switch>
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
