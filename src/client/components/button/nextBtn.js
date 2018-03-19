import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as start from '../../actions';
import './style.css';

class ButtonNext extends Component {
  constructor(props) {
    super(props);
    this.handleNext = this.handleNext.bind(this);
  }
  handleNext() {
    this.props.firstQ(this.props.onClick);
  }

  render() {
    return (
      <div className='btn' onClick={this.handleNext}>
        <div className='next__btn'><h1 className='btn__next'>Next</h1>
          <i className='fa fa-angle-right next__btn__q' id='fa-angle-right'></i>
        </div>
      </div>

    );
  }
}

ButtonNext.propTypes = {
  onClick: PropTypes.string,
  firstQ: PropTypes.func
};

const mapDispatchToProps = {
  firstQ: start.firstQ

};
export default connect(null, mapDispatchToProps)(ButtonNext);
