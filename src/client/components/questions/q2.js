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
    this.showCheckboxes = this.showCheckboxes.bind(this);
    this.handleSelectInteresting = this.handleSelectInteresting.bind(this);
  }

  showCheckboxes(e) {
    e.preventDefault();
    const checkboxes = document.getElementById('checkboxes');
    if (!this.state.showReply) {
      checkboxes.style.display = 'block';
    } else {
      checkboxes.style.display = 'none';
    }
    this.setState({ showReply: !this.state.showReply });
  }
  handleSelectInteresting() {
    const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    const arr = Array.prototype.slice.call(checkboxes);
    const interesting = arr.map(e => {
      return e.value;
    });
    this.props.storeAnswer({ name: 'interesting', value: interesting });

  }
  render() {
    return (
      <div className='question__container'>
        <div className='q__container'>
          <h1>Tell us what you are interesting in
          (freelancing, mentoring, CFing, Contracts....)</h1>
          <div className='selectBox' onClick={this.showCheckboxes}>
            <select className='Q_dropdown'>
              <option>Choose your interest</option>
            </select>
            <div className='overSelect'></div>
          </div>
          <div id='checkboxes' className='checkboxes' onClick={this.handleSelectInteresting}>
            <label htmlFor='Freelancing'>
              <input type='checkbox' id='Freelancing' value='Freelancing' />Freelancing</label>
            <label htmlFor='Mentoring'>
              <input type='checkbox' id='Mentoring' value='Mentoring' />Mentoring</label>
            <label htmlFor='CFing'>
              <input type='checkbox' id='CFing' value='CFing'/>CFing</label>
            <label htmlFor='Contracts'>
              <input type='checkbox' id='Contracts' value='Contracts'/>Contracts</label>

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
