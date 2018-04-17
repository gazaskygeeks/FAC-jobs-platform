import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as filterStudentsAction from '../../../actions/filterStudentsAction';
import './style.css';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      status: null,
      campus: null,
      cohort: null,
      skills: null,
      interests: null
    };

    this._handleDataChange = this._handleDataChange.bind(this);
    this._handleFilterSubmit = this._handleFilterSubmit.bind(this);
  }

  _handleDataChange(ev) {
    const campus = ev.target.value;
    const gaza = ['FACG1', 'FACG2', 'FACG3', 'FACG4'];
    const london = ['FAC-1', 'FAC-2', 'FAC-3', 'FAC-4', 'FAC-5', 'FAC-6', 'FAC-7', 'FAC-8',
      'FAC-9', 'FAC-10', 'FAC-11', 'FAC-12'];
    const nazareth = ['FACN1', 'FACN2', 'FACN3'];

    this.setState({
      [ev.target.name]: ev.target.value
    });

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

  _handleFilterSubmit(ev) {
    ev.preventDefault();
    const { allStudents } = this.props;
    const {
      status,
      campus,
      cohort,
      skills,
      interests
    } = this.state;
    this.props.filterStudents(allStudents, {
      status,
      campus,
      cohort,
      skills,
      interests
    });
  }

  render() {

    return (

      <div className='filter'>
        <div className='filter__text' >Filter By: </div>
        <form className='filter__form' >
          <select className='filter__select' onChange={this._handleDataChange}
            value={this.state.status} name='status'>
            <option value='' disabled selected >Status</option>
            <option value='Urgent' >Urgent</option>
            <option value='Kind Of' >Kind Of</option>
            <option value='Not Intersted' >Not Intersted</option>
            <option value='' >All Status</option>
          </select>

          <select className='filter__select' onChange={this._handleDataChange}
            value={this.state.campus} name='campus'>
            <option value='' disabled selected>Campus</option>
            <option value='Gaza' >Gaza</option>
            <option value='London' >London</option>
            <option value='Nazareth' >Nazareth</option>
            <option value='' >All Cumpuses</option>

          </select>

          <select className='filter__select' onChange={this._handleDataChange}
            value={this.state.cohort} name='cohort'>
            <option value='' disabled selected>cohort</option>;
            {
              this.state.options.map((cohort, index) => {

                return <option value={cohort} key={index}>{cohort}</option>;
              })
            }
            <option value='' >All Cohorts</option>

          </select>

          <select className='filter__select' onChange={this._handleDataChange}
            value={this.state.skills} name='skills'>
            <option value='' disabled selected>Skills</option>
            <option value='HTML' >HTML</option>
            <option value='CSS' >CSS</option>
            <option value='Node.js' >Node.js</option>
            <option value='React.js' >React.js</option>
            <option value='' >Any Skill</option>

          </select>

          <select className='filter__select' onChange={this._handleDataChange}
            value={this.state.interests} name='interests'>
            <option value='' disabled selected>Interest</option>
            <option value='Freelancing' >Freelancing</option>
            <option value='Mentoring' >Mentoring</option>
            <option value='CFing' >CFing</option>
            <option value='' >Any interest</option>

          </select>

          <input type='submit' value='Search' className='filter__search'
            onClick={this._handleFilterSubmit}/>
        </form>
      </div>
    );

  }
}

Filter.propTypes = {
  allStudents: PropTypes.array,
  filterStudents: PropTypes.func
};

const mapDispatchToProps = {
  filterStudents: filterStudentsAction.filterStudents
};

export default connect(null,mapDispatchToProps)(Filter);
