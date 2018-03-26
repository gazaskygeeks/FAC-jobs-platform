import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as storeAnswer from '../../actions/storeanswer';
import ButtonNext from '../button/nextBtn';
import ButtonBack from '../button/backBtn';

import './style.css';

class Q4 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleStackoverflow = this.handleStackoverflow.bind(this);
    this.handleLinkedin = this.handleLinkedin.bind(this);
  }
  handleStackoverflow(ev) {
    const stackoverflow= ev.target.value;
    this.props.storeAnswer({ name: 'stackoverflow', value: stackoverflow });
  }
  handleLinkedin(ev) {
    const linkedin= ev.target.value;
    this.props.storeAnswer({ name: 'linkedin', value: linkedin });

  }
  render() {
    return (
      <div className='question__container'>
        <div className='q__container'>
          <h1>Link your social accounts:</h1>
          <div>
            <h3 className='q__h3'>Stackoverflow</h3>
            <input type='text' className='q__input__stack' onChange={this.handleStackoverflow}/>
          </div>
          <div>
            <h3 className='q__h3'>Linkedin</h3>
            <input type='text' className='q__input__in' onChange={this.handleLinkedin}/>
          </div>
        </div>
        <div className='buttons'>

          <ButtonBack prevQuestion='Q3'/>
          <ButtonNext nextQuestion='Q5'/>
        </div>
      </div>
    );
  }
}

Q4.propTypes = {
  storeAnswer: PropTypes.func
};
const mapDispatchToProps ={
  storeAnswer: storeAnswer.compilationOfAnswers

};

export default connect(null, mapDispatchToProps)(Q4);
