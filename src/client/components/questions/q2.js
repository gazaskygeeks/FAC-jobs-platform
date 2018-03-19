import React, { Component } from 'react';

import ButtonNext from '../button/nextBtn';
import ButtonBack from '../button/backBtn';
import './style.css';

class Q2 extends Component {
  render() {
    return (
      <div>
        <div className='q__container'>
          <h1>Tell us what you are interesting in
          (freelancing, mentoring, CFing, Contracts....)</h1>
          <div>
            <h3 className='q__h3'>Campus</h3>
            <select className='dropdown'>
              <option>Freelancing</option>
              <option>Mentoring</option>
              <option>CFing</option>
              <option>Contracts</option>
            </select>
          </div>
          <ButtonNext onClick='Q3'/>
          <ButtonBack onClick='Q1'/>
        </div>
      </div>
    );
  }
}
export default Q2;
