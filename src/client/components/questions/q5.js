import React, { Component } from 'react';

import ButtonNext from '../button/nextBtn';
import ButtonBack from '../button/backBtn';
import './style.css';

class Q5 extends Component {
  render() {
    return (
      <div>
        <div className='q__container'>
          <h1>Tell us if you are looking for opportunity now? </h1>
          <div>
            <div className='custom-radios'>
              <div>
                <input type='radio' id='color-3' name='color' value='color-3'/>
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
                <input type='radio' id='color-1' name='color' value='color-1' />
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
                <input type='radio' id='color-2' name='color' value='color-2' />
                <label htmlFor='color-2'>
                  <span>
                    <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg' alt='Checked Icon' />
                  </span>
                  Not Intrested
                </label>
              </div>

            </div>
          </div>
          <ButtonNext onClick='Q6'/>
          <ButtonBack onClick='Q4'/>
        </div>
      </div>
    );
  }
}

export default Q5;
