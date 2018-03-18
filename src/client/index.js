import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import store from './store';
import StudentProfile from './components/studentProfile';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div className='app'>
        <Switch>
          <Route exact path='/profile' component={StudentProfile} />
          <Redirect to='/' />
        </Switch>
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
