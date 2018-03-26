import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Welcome from '../welcome/';
import Q1 from '../questions/q1.js';
import Q2 from '../questions/q2.js';
import Q3 from '../questions/q3.js';
import Q4 from '../questions/q4.js';
import Q5 from '../questions/q5.js';
import Q6 from '../questions/q6.js';
import End from '../questions/endofquesions.js';

import './style.css';

class Form extends Component {
  constructor(props) {
    super(props);

    this.renderView = this.renderView.bind(this);
  }

  renderView() {
    const { questionNumber } =this.props;

    switch (questionNumber) {
      case 'Welcome':
        return <Welcome />;
      case 'Q1':
        return <Q1 />;
      case 'Q2':
        return <Q2 />;
      case 'Q3':
        return <Q3 />;
      case 'Q4':
        return <Q4/>;
      case 'Q5':
        return <Q5 />;
      case 'Q6':
        return <Q6 />;
      case 'End':
        return <End/>;
      default:
        return <Welcome />;
    }

  }

  render() {
    return (
      <div id='questions' className='questions'>
        <div id='start' className='start'>
          <div className='container-question'>
            {this.renderView()}
          </div>

        </div>
      </div>
    );
  }
}
Form.propTypes = {
  questionNumber: PropTypes.string,
  onClick: PropTypes.string

};

const mapStateToProps = state => {
  return { questionNumber: state.data.questionNumber };
};

export default connect(mapStateToProps, null)(Form);
