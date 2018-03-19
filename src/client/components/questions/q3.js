import React, { Component } from 'react';

import ButtonNext from '../button/nextBtn';
import ButtonBack from '../button/backBtn';
import './style.css';

class Q3 extends Component {
  constructor() {
    super();
    this.state = {
      showReply: false
    };
    this.showCheckboxes = this.showCheckboxes.bind(this);

  }
  showCheckboxes(e) {
    e.preventDefault();
    const checkboxes = document.getElementById('checkboxes');
    if (!this.state.showReply) {
      checkboxes.style.display = 'block';
    } else {
      checkboxes.style.display = 'none';
    }
    this.setState({ showReply: !this.state.showReply });
  }

  render() {
    return (
      <div>
        <div className='q__container'>
          <h1>Tell us your top 5 tech skills</h1>
          <div className='selectBox' onClick={this.showCheckboxes}>
            <select className='dropdown'>
              <option>Choose at least 3 tech</option>
            </select>
            <div className='overSelect'></div>
          </div>
          <div id='checkboxes' className='checkboxes'>
            <label htmlFor='node'>
              <input type='checkbox' id='node' />Node</label>
            <label htmlFor='html'>
              <input type='checkbox' id='html' />HTML</label>
            <label htmlFor='express'>
              <input type='checkbox' id='express' />Express</label>
          </div>
          <ButtonNext onClick='Q4'/>
          <ButtonBack onClick='Q2'/>
        </div>
      </div>
    );
  }
}

export default Q3;
