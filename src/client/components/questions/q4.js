import React, { Component } from 'react';

import ButtonNext from '../button/nextBtn';
import ButtonBack from '../button/backBtn';
import './style.css';

class Q4 extends Component {
  render() {
    return (
      <div>
        <div className='q__container'>
          <h1>Link your social accounts:</h1>
          <div>
            <h3 className='q__h3'>Stackoverflow</h3>
            <input type='text' className='q__input__stack'/>
          </div>
          <div>
            <h3 className='q__h3'>Linkedin</h3>
            <input type='text' className='q__input__in'/>
          </div>
          <ButtonNext onClick='Q5'/>
          <ButtonBack onClick='Q3'/>
        </div>
      </div>
    );
  }
}

export default Q4;
