import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as start from '../../actions/getQuestion';
import './style.css';

class ButtonNext extends Component {
  constructor(props) {
    super(props);
    this.state={};
    this.handleNext = this.handleNext.bind(this);
  };

  handleNext() {
    const error = this.props.firstQ(this.props.nextQuestion);
    this.setState({ error });
  }

  render() {
    return (
      <div className='buttonWithErrorMessage'>
        <h4 className='errorMessage'>{this.state.error}</h4>
        <div className='next__btn' onClick={this.handleNext}>
          <h1 className='btn__next'>Next</h1>
          <i className='fa fa-angle-right next__btn__q' id='fa-angle-right'></i>
        </div>
      </div>
    );
  }
}

ButtonNext.propTypes = {
  nextQuestion: PropTypes.string,
  compus: PropTypes.string,
  chort: PropTypes.string,
  interesting: PropTypes.string,
  stackoverflow: PropTypes.string,
  linkedin: PropTypes.string,
  skills: PropTypes.obj,
  firstQ: PropTypes.func
};

const mapDispatchToProps = {
  firstQ: start.firstQ
};
export default connect(null, mapDispatchToProps)(ButtonNext);
