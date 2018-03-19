import React, { Component } from 'react';

import ButtonBack from '../button/backBtn';
import './style.css';

class End extends Component {
  render() {
    return (
      <div>
        <div className='q__container'>
          <h2 className='end__h1'>Great!</h2>
          <div>
            <p className='end__p'>Thanks for contacting us
              Welcome to FAC Jobs again.
              Now, wait for the manager to contact you.
            </p>
            <i className='fa fa-heart' style={{ fontSize: '48px',color: 'white' }}></i>
          </div>
          <div className='btn' onClick={this.handleNext}>
            <div className='go_profile'><h1 className='btn__next'>Go to profile</h1>
              <i className='fa fa-angle-right next__btn__q' id='fa-angle-right'></i>
            </div>
          </div>
          <ButtonBack onClick='Q6'/>

        </div>
      </div>
    );
  }
}

export default End;
