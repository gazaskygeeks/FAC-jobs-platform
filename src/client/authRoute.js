
import React from 'react';
import { Route,Redirect } from 'react-router-dom';

const fakeAuth = {
  isAuthenticated: true,
  authenticate(cb) {
    this.isAuthenticated=true;
    setTimeout(cb,100);
  }

};

// console.log(this.props);
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/'

          }}
        />
      )
    }
  />
);
export default (PrivateRoute);
