import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as start from '../../actions';
import './style.css';

class Start extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    this.props.firstQ('Q1');
  }

  render() {
    return (
      <div className='start__container'>
        <img src='./assets/logo1.png'/>
        <h1>Hi Walaa!</h1>
        <p>Start building your profile through these simple steps</p>
        <div className='start__btn' onClick={this.handleSubmit}>
          <h1 className='btn__start'>Start</h1>
          <i className='fa fa-angle-right  start__btn__w' id='fa-angle-right'></i></div>
      </div>
    );
  }
}
Start.propTypes = {
  firstQ: PropTypes.func
};

const mapDispatchToProps = {
  firstQ: start.firstQ

};
export default connect(null, mapDispatchToProps)(Start);
