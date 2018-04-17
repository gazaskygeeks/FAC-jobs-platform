import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as login from '../../actions/login';

import './index.css';

class Home extends Component {
  constructor(props) {
    super(props);
  };
  componentWillMount() {
    this.props.login();

  }
  render() {

    return (
      (!this.props.user.isLogged)?
        <div className='home'>
          <div className='home__nav'>
            <span className='home__about'>ABOUT US</span>
            <span className='home__contact'>CONTACT US</span>
          </div>
          <div className='home__container'>
            <div className='home__subContainer'>
              <img className='home__img' src='./assets/logo-facapt.png' />
              <div className='home__text'>Founders & Coders
              sustainable opportunity-based Community</div>
            </div>
            <a className='home__btn' href='auth/github'>Sign in with</a>
          </div>
        </div>
        :
        (this.props.user.user.isadmin)?<Redirect to='/dashboard'/>
          :
          <Redirect to={`/profile/${this.props.user.user.name}`}/>
    );
  }
}

Home.propTypes = {
  login: PropTypes.func,
  user: PropTypes.obj,
  history: PropTypes.obj

};
const mapStateToProps = state => {
  return {
    user: state.login };
};
const mapDispatchToProps = {
  login: login.loginuser
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
