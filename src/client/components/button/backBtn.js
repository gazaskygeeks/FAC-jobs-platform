import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as start from '../../actions';
import './style.css';

class ButtonBack extends Component {
  constructor(props) {
    super(props);
    this.handlePrevious = this.handlePrevious.bind(this);
  }
  handlePrevious() {
    this.props.firstQ(this.props.prevQuestion);
  }
  render() {
    return (
      <div className='previous__btn' onClick={this.handlePrevious}>
        <i className='fa fa-angle-left previous__btn__q' id='fa-angle-left'></i>
        <h1 className='btn__previous' id='btn__previous'>Previous</h1>
      </div>

    );
  }
}

ButtonBack.propTypes = {
  prevQuestion: PropTypes.string,
  firstQ: PropTypes.func
};

const mapDispatchToProps = {
  firstQ: start.firstQ

};
export default connect(null, mapDispatchToProps)(ButtonBack);
