import React, { Component } from 'react';

import ButtonNext from '../button/nextBtn';
import ButtonBack from '../button/backBtn';
import './style.css';

class Q6 extends Component {
  render() {
    return (
      <div>
        <div className='q__container'>
          <h1>Upload your (Projects links, C.V., Portfolio) </h1>
          <div>
            <h3 className='q__h3'>
            Project links
              <span>
                <input type='text' className='q__input' placeholder='Link your project 1'/>
              </span>
              <span>
                <input type='text' className='q__input__project2'
                  placeholder='Link your project 2'/>
              </span>
            </h3>

          </div>
          <div>
            <h3 className='q__h3'>
            (Portfolio)
              <span>
                <input type='text' className='q__input' placeholder='Link your portfolio'/>
              </span>
            </h3>
          </div>
          <ButtonNext onClick='End'/>
          <ButtonBack onClick='Q5'/>
        </div>
      </div>
    );
  }
}

export default Q6;
