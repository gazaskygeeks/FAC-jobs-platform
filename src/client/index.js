import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';
import Home from './components/home';
import Form from './components/greencomp';
import Profile from './components/studentProfile';
import Page404 from './components/page404';
import AdminDashboard from './components/admindashborad';
import MainSettings from './components/settings';
import PrivateRoute from './authRoute';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className='app'>
        <Switch>
          <Route exact path='/' component={Home} />
          <PrivateRoute path='/dashboard' ComponentName={AdminDashboard} />
          <Route path='/form' component={Form} />
          <PrivateRoute path='/profile/:student_name' ComponentName={Profile} />
          <Route exact path='/profilesettings' component={MainSettings} />
          <Route component={Page404} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
