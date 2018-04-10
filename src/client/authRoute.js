import React,{ Component } from 'react';
import { Route,Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as login from './actions/login';
import allData from './actions/getAllDataAction';

class PrivateRoute extends Component {
  constructor(props) {
    super(props);
    this.state={};
  }
  componentWillMount() {
    this.props.login();
  }

  render() {
    const { ComponentName, isFetching, user, ...rest } = this.props;

    if (isFetching) {
      return <div>Loading  ...</div>;
    }

    return (
      <Route
        {...rest}
        render={props => {
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
  }
}

PrivateRoute.propTypes = {
  ComponentName: PropTypes.str,
  data: PropTypes.func,
  login: PropTypes.func,
  isFetching: PropTypes.bool,
  user: PropTypes.obj

};
const mapStateToProps = state => {
  return {
    user: state.login,
    isFetching: state.login.isFetching
  };
};
const mapDispatchToProps = {
  data: allData,
  login: login.loginuser

};
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
