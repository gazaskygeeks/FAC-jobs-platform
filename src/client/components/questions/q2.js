import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as storeAnswer from '../../actions/storeanswer';
import ButtonNext from '../button/nextBtn';
import ButtonBack from '../button/backBtn';

import './style.css';

class Q2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSelectInteresting = this.handleSelectInteresting.bind(this);
  }
  handleSelectInteresting(ev) {
    const interesting= ev.target.value;
    this.props.storeAnswer({ name: 'interesting', value: interesting });

  }
  render() {
    return (
      <div className='question__container'>
        <div className='q__container'>
          <h1>Tell us what you are interesting in
          (freelancing, mentoring, CFing, Contracts....)</h1>
          <div>
            <select className='Q_dropdown' onChange={this.handleSelectInteresting}>
              <option selected disabled>Choose your interest</option>
              <option>Freelancing</option>
              <option>Mentoring</option>
              <option>CFing</option>
              <option>Contracts</option>
            </select>
          </div>

        </div>
        <div className='buttons'>
          <ButtonBack prevQuestion='Q1'/>
          <ButtonNext nextQuestion='Q3'/>
        </div>
      </div>
    );
  }
}
Q2.propTypes = {
  storeAnswer: PropTypes.func
};
const mapDispatchToProps ={
  storeAnswer: storeAnswer.compilationOfAnswers

};

export default connect(null, mapDispatchToProps)(Q2);
