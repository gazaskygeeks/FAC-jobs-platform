import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as storeAnswer from '../../actions/storeanswer';
import ButtonNext from '../button/nextBtn';
import ButtonBack from '../button/backBtn';
import './style.css';

class Q6 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleLinks = this.handleLinks.bind(this);
  }
  handleLinks() {
    const opportunity= document.querySelector('input[name="color"]:checked').value;
    this.props.storeAnswer({ name: 'opportunity', value: opportunity });

  }
  render() {
    return (
      <div className='question__container'>
        <div className='q__container'>
          <h1>Upload your (Projects links, C.V., Portfolio) </h1>
          <div className='q6__container'>
            <div className='q6_links'>
              <h3 className='q6__h3'> Project links </h3>
              <h3 className='q6_p__h3'>(Portfolio)</h3>
              <h3 >CV.</h3>

            </div>
            <div className='q6_input'>
              <input type='text' placeholder='Link your project 1' onChange={this.handleLinks}/>
              <input type='text' placeholder='Link your project 2' onChange={this.handleLinks}/>
              <input type='text' placeholder='Link your portfolio' onChange={this.handleLinks}/>
              <h3>Upload CV. <i className='fa fa-upload'></i></h3>
            </div>
          </div>
        </div>
        <div className='buttons'>
          <ButtonBack prevQuestion='Q5' />
          <ButtonNext nextQuestion='End' />
        </div>
      </div>
    );
  }
}

Q6.propTypes = {
  storeAnswer: PropTypes.func
};
const mapDispatchToProps ={
  storeAnswer: storeAnswer.compilationOfAnswers

};

export default connect(null, mapDispatchToProps)(Q6);
