import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as storeAnswer from '../../actions/storeanswer';
import ButtonNext from '../button/nextBtn';
import ButtonBack from '../button/backBtn';

import './style.css';

class Q3 extends Component {
  constructor() {
    super();
    this.state = {
      showReply: false
    };
    this.showCheckboxes = this.showCheckboxes.bind(this);
    this.getSkills = this.getSkills.bind(this);

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
  getSkills() {
    const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    const arr = Array.prototype.slice.call(checkboxes);
    const skills = arr.map(e => {
      return e.value;
    });
    this.props.storeAnswer({ name: 'skills', value: skills });

  }
  render() {
    return (
      <div className='question__container'>
        <div className='q__container'>
          <h1>Tell us your top 5 tech skills</h1>
          <div className='selectBox' onClick={this.showCheckboxes}>
            <select className='dropdown'>
              <option>Choose at least 3 tech</option>
            </select>
            <div className='overSelect'></div>
          </div>
          <div id='checkboxes' className='checkboxes' onClick={this.getSkills}>
            <label htmlFor='node'>
              <input type='checkbox' id='node' value='Node' />Node</label>
            <label htmlFor='html'>
              <input type='checkbox' id='html' value='HTML' />HTML</label>
            <label htmlFor='express'>
              <input type='checkbox' id='express' value='Express'/>Express</label>
          </div>

        </div>
        <div className='buttons'>

          <ButtonBack prevQuestion='Q2'/>
          <ButtonNext nextQuestion='Q4'/>
        </div>
      </div>
    );
  }
}

Q3.propTypes = {
  storeAnswer: PropTypes.func
};
const mapDispatchToProps ={
  storeAnswer: storeAnswer.compilationOfAnswers

};

export default connect(null, mapDispatchToProps)(Q3);
