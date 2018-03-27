import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as storeAnswer from '../../actions/storeanswer';
import ButtonNext from '../button/nextBtn';
import './style.css';

class Q1 extends Component {
  constructor(props) {
    super(props);

    this.handleSelectCompus = this.handleSelectCompus.bind(this);
    this.handleSelectChort = this.handleSelectChort.bind(this);
  }
  handleSelectCompus(event) {
    const compus= event.target.value;
    this.props.storeAnswer({ name: 'compus', value: compus });
  }
  handleSelectChort(event) {
    const cohort= event.target.value;
    this.props.storeAnswer({ name: 'cohort', value: cohort });
  }

  render() {
    return (
      <div className='question__container'>
        <div className='q__container'>
          <h1>What cohort and campus you are in?</h1>
          <div>
            <h3 className='q__h3'>Campus</h3>
            <select className='Q_dropdown' onChange={this.handleSelectCompus}>
              <option selected disabled>Choose Campus</option>
              <option value='Gaza'>Gaza</option>
              <option value='London'>London</option>
              <option value='Nazareth'>Nazareth</option>
            </select>
          </div>
          <div>
            <h3 className='q__h3'>Cohort</h3>
            <select className='Q_dropdown' onChange={this.handleSelectChort}>
              <option selected disabled>Choose cohort</option>
              <option value='FACG3'>FACG3</option>
              <option value='FACG2'>FACG2</option>
              <option value='FACG1'>FACG1</option>
            </select>
          </div>
        </div>
        <div className='buttons'>

          <div />
          <ButtonNext nextQuestion='Q2' />
        </div>
      </div>
    );
  }
}
Q1.propTypes = {
  storeAnswer: PropTypes.func
};
const mapDispatchToProps ={
  storeAnswer: storeAnswer.compilationOfAnswers
};

export default connect(null, mapDispatchToProps)(Q1);
