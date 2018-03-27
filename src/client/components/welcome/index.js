import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as start from '../../actions/getQuestion';
import * as login from '../../actions/login';
import './style.css';

class Start extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    this.props.firstQ('Q1');
  }

  componentDidMount() {
    this.props.login();
  }

  render() {

    return (
      <div className='start__container'>
        <img className='start__img' src='./assets/logo1.png'/>
        <h1 className='start__h1'>Hi {this.props.user.name}</h1>
        <p>Start building your profile through these simple steps</p>
        <div className='start__btn' onClick={this.handleSubmit}>
          <h1 className='btn__start'>Start</h1>
          <i className='fa fa-angle-right  start__btn__w' id='fa-angle-right'></i></div>
      </div>
    );
  }
}
Start.propTypes = {
  firstQ: PropTypes.func,
  login: PropTypes.func,
  user: PropTypes.obj
};
const mapStateToProps = state => {
  return {
    user: state.login.user
  };
};
const mapDispatchToProps = {
  firstQ: start.firstQ,
  login: login.loginuser

};
export default connect(mapStateToProps, mapDispatchToProps)(Start);
