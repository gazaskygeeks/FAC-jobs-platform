import React, { Component } from 'react';

import './style.css';

class Filter extends Component {
  render() {
    return (
      <div className='filter'>
        <div className='filter__text'>Filter By: </div>
        <select className='filter__select'>
          <option value='' disabled selected >Availability</option>
        </select>
        <select className='filter__select'>
          <option value='' disabled selected>Campuses</option>
        </select>
        <select className='filter__select'>
          <option value='' disabled selected>Cohort</option>
        </select>
        <select className='filter__select'>
          <option value='' disabled selected>Skills</option>
        </select>
        <select className='filter__select'>
          <option value='' disabled selected>Interst</option>
        </select>
        <input type='submit' value='Search' className='filter__search'/>
      </div>
    );
  }
}

export default Filter;
