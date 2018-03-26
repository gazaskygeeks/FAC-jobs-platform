import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as storeAnswer from '../../actions/storeanswer';
import ButtonNext from '../button/nextBtn';
import ButtonBack from '../button/backBtn';

import './style.css';

class Q5 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleOpportunity = this.handleOpportunity.bind(this);
  }
  handleOpportunity() {
    const opportunity= document.querySelector('input[name="color"]:checked').value;
    this.props.storeAnswer({ name: 'opportunity', value: opportunity });

  }
  render() {
    return (
      <div className='question__container'>
        <div className='q__container'>
          <h1>Tell us if you are looking for opportunity now? </h1>
          <div>
            <div className='custom-radios'>
              <div>
                <input type='radio' id='color-3' name='color' value='Urgent'
                  onClick={this.handleOpportunity}/>
                <label htmlFor='color-3'>
                  <span>
                    <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg' alt='Checked Icon' />
                  </span>
                  Urgent
                </label>
              </div>
              <br/>
              <br/>
              <div>
                <input type='radio' id='color-1' name='color' value='Kind Of'
                  onClick={this.handleOpportunity}/>
                <label htmlFor='color-1'>
                  <span>
                    <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg' alt='Checked Icon' />
                  </span>
                  Kind Of
                </label>
              </div>
              <br/>
              <br/>
              <div>
                <input type='radio' id='color-2' name='color' value='Not Intrested'
                  onClick={this.handleOpportunity}/>
                <label htmlFor='color-2'>
                  <span>
                    <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg' alt='Checked Icon' />
                  </span>
                  Not Intrested
                </label>
              </div>

            </div>
          </div>

        </div>
        <div className='buttons'>

          <ButtonBack prevQuestion='Q4'/>
          <ButtonNext nextQuestion='Q6'/>
        </div>
      </div>
    );
  }
}

Q5.propTypes = {
  storeAnswer: PropTypes.func
};
const mapDispatchToProps ={
  storeAnswer: storeAnswer.compilationOfAnswers

};

export default connect(null, mapDispatchToProps)(Q5);
