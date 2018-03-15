import React, { Component } from 'react';

import Students from './students';
import Filter from './filter';

import './style.css';

class Admindashboard extends Component {
  render() {
    return (
      <div className='admindashboard'>
        <div className='testNav'></div>
        <div className='admindashboard__container'>
          <div className='admindashboard__students'>
            <Students />
            <Students />
            <Students />
          </div>
          <div className='admindashboard__filter'>
            <Filter />
          </div>
        </div>
        <div className='testNav'></div>
      </div>
    );
  }
}

export default Admindashboard;
