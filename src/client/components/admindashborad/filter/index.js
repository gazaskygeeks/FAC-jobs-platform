import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };

    this._handleDataChange = this._handleDataChange.bind(this);
    console.log(this.props.allStudents);
  }

  _handleDataChange(ev) {
    const campus = ev.target.value;
    const gaza = ['FACG1', 'FACG2', 'FACG3', 'FACG4'];
    const london = ['FAC-1', 'FAC-2', 'FAC-3', 'FAC-4', 'FAC-5', 'FAC-6', 'FAC-7', 'FAC-8',
      'FAC-9', 'FAC-10', 'FAC-11', 'FAC-12'];
    const nazareth = ['FACN1', 'FACN2', 'FACN3'];

    switch (campus) {
      case 'Gaza':
        return this.setState({
          options: gaza
        });
      case 'London':
        return this.setState({
          options: london
        });
      case 'Nazareth':
        return this.setState({
          options: nazareth
        });
      default:
        return [];
    }
  }

  render() {
    console.log(this.props, ' this.props');

    return (

      <div className='filter'>
        <div className='filter__text' >Filter By: </div>
        <form className='filter__form' >
          <select className='filter__select'>

            <option value='' disabled selected >Availability</option>
            <option value='Urgent' >Urgent</option>
            <option value='Kind Of' >Kind Of</option>
            <option value='Not Intersted' >Not Intersted</option>
          </select>

          <select className='filter__select' onChange={this._handleDataChange}>
            <option value='' disabled selected>Campuses</option>
            <option value='Gaza' >Gaza</option>
            <option value='London' >London</option>
            <option value='Nazareth' >Nazareth</option>
          </select>

          <select className='filter__select'>
            <option value='' disabled selected>Cohort</option>;
            {
              this.state.options.map((cohort, index) => {
                return <option value={cohort} key={index}>{cohort}</option>;
              })
            }
          </select>

          <select className='filter__select'>
            <option value='' disabled selected>Skills</option>
            <option value='HTML' >HTML</option>
            <option value='CSS' >CSS</option>
            <option value='Node.js' >Node.js</option>
            <option value='React.js' >React.js</option>
          </select>

          <select className='filter__select'>
            <option value='' disabled selected>Interest</option>
            <option value='Freelancing' >Freelancing</option>
            <option value='Mentoring' >Mentoring</option>
            <option value='CFing' >CFing</option>
          </select>

          <input type='submit' value='Search' className='filter__search'/>
        </form>
      </div>
    );

  }
}

Filter.propTypes = {
  allStudents: PropTypes.obj
};

export default Filter;
