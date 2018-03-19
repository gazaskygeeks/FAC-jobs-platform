import React, { Component } from 'react';

import ButtonNext from '../button/nextBtn';
import './style.css';

class Q1 extends Component {
  render() {
    return (
      <div>
        <div className='q__container'>
          <h1>What cohort and campus you are in?</h1>
          <div>
            <h3 className='q__h3'>Campus</h3>
            <select className='dropdown'>
              <option>Gaza</option>
              <option>London</option>
              <option>Nazareth</option>
            </select>
          </div>
          <div>
            <h3 className='q__h3'>Chort</h3>
            <select className='dropdown'>
              <option>FACG3</option>
              <option>FACG2</option>
              <option>FACG1</option>
            </select>
          </div>
          <ButtonNext onClick='Q2'/>
        </div>
      </div>
    );
  }
}

export default Q1;
