import React, { Component } from 'react';

import './index.css';

class Home extends Component {
  constructor() {
    //there is code here;
    super();
  };
  render() {
    return (
      <div className='home'>
        <div className='home__nav'>
          <span className='home__about'>ABOUT US</span>
          <span className='home__contact'>CONTACT US</span>
        </div>
        <div className='home__container'>
          <div className='home__subContainer'>
            <img className='home__img' src='./assets/logo-facapt.png' />
            <div className='home__text'>Founders & Coders
              sustainable opportunity-based Community</div>
          </div>
          <a className='home__btn' href="auth/github">Sign in with</a>
        </div>
      </div>
    );
  }
}

export default Home;
