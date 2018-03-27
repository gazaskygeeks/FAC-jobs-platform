import React, { Component } from 'react';

import './style.css';

class Settings extends Component {
  render() {
    return (
      <div id='setting' className='setting'>
        <div className='setting__nav'>
          <img src='./assets/logo.png'/>
          <h1>Founders & Coders</h1>
        </div>
        <div className='setting__container'>
          <h1>Edit your Profile</h1>
          <div className='container__left'>
            <input type='text' />
          </div>
          <div className='container__right'>
            <input type='text' />
          </div>
        </div>
        <div/>
      </div>
    );
  }
}

export default Settings;
