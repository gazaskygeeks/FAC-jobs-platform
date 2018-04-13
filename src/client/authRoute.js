import React,{ Component } from 'react';
import { Route,Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { REQUEST_PENDING } from './constants/requestStatuses';

import * as login from './actions/login';
import allData from './actions/getAllDataAction';

class PrivateRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.login();

  }

  render() {
    const { ComponentName, reqestStatus, user, ...rest } = this.props;
    if (reqestStatus === undefined || reqestStatus === REQUEST_PENDING) {
      return <div>Loading  ...</div>;
    }
    switch (rest.path) {
      case '/dashboard':
        return (
          <Route
            {...rest}
            render={props => {
              console.log(props,'props auth to form');

              return (
                user.isLogged &&user.user.isadmin? (
                  <ComponentName {...props} />
                ) :user.isLogged&&!user.user.isadmin? (<Redirect
                  to={{ pathname: '/404' }}
                />):
                  !user.isLogged &&(rest.path==='/')?
                    (
                      <Redirect
                        to={{ pathname: '/' }}
                      />
                    )
                    :(<Redirect
                      to={{ pathname: '/404' }}
                    />)
              );
            }
            }
          />
        );
      case '/form':
        return (
          <Route
            {...rest}
            render={props => {

              return (
                user.isLogged && user.user.newuser && !user.user.isadmin? (
                  <ComponentName {...props} />
                ) :user.isLogged&&!user.user.newuser&&!user.user.isadmin? (<Redirect
                  to={{ pathname: `/profile/${user.user.name}` }}
                />):
                  !user.isLogged?
                    (
                      <Redirect
                        to={{ pathname: '/' }}
                      />
                    )
                    :(<Redirect
                      to={{ pathname: '/404' }}
                    />)
              );
            }
            }
          />
        );
      case '/profile/:student_name':
        const student_name=this.props.computedMatch.params.student_name;

        return (
          <Route
            {...rest}
            render={props => {
              return (
                user.isLogged && !user.user.newuser && !user.user.isadmin &&
                user.user.name===student_name? (
                    <ComponentName {...props} />
                  ) :user.isLogged&&!user.user.newuser&&!user.user.isadmin? (<Redirect
                    to={{ pathname: '/404' }}
                  />):
                    !user.isLogged?
                      (
                        <Redirect
                          to={{ pathname: '/' }}
                        />
                      )
                      :(<Redirect
                        to={{ pathname: '/404' }}
                      />)
              );
            }
            }
          />
        );
    }
  }
}

PrivateRoute.propTypes = {
  ComponentName: PropTypes.str,
  data: PropTypes.func,
  login: PropTypes.func,
  newuser: PropTypes.func,
  reqestStatus: PropTypes.str,
  user: PropTypes.obj,
  computedMatch: PropTypes.obj

};
const mapStateToProps = state => {
  return {
    user: state.login,
    reqestStatus: state.login.reqestStatus
  };
};
const mapDispatchToProps = {
  data: allData,
  login: login.loginuser
};
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
