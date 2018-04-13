import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as filterStudentsAction from '../../../actions/filterStudentsAction';
import sortStudents from '../../../actions/sortStudentsAction';



import './style.css';

class Sort extends Component {
  constructor(props) {
    super(props);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.handleSelectValue = this.handleSelectValue.bind(this);
  }


  handleInputValue(ev){
    ev.preventDefault();
    let name=ev.target[0].value;
    const allStudents  = this.props.students.allStudents;
      this.props.filterStudents(allStudents,{username:name});

  }
  handleSelectValue(ev){
    const allStudents  = this.props.students.allStudents;
    let sortBy=ev.target.value;
    if (sortBy==='all') {
      this.props.filterStudents(allStudents,{username:name});
    }
    else {
      this.props.sortStudents(allStudents,sortBy);
    }

  }

  render() {
    return (
      <div className='sort'>
      <div className='sort_container'>

      <form style={{position: 'relative'}} onSubmit={this.handleInputValue}>
        <input type='text' className='sort_input' placeholder="Search for student by name"/>
        <select onChange={this.handleSelectValue} className="sort_select">
          <option value='all' disabled selected></option>
          <option value='alphabetical' className='sort_alphabet'>Sort Alphabetical</option>
          <option value='last updated' className='sort_updated'>last updated</option>
          <option value='signup date' className='sort_signup'>sign up date</option>
          <option value='all' className='sort_signup'>just by name</option>
          </select>
          </form>
      </div>
      </div>
    );
  }
  }



  const mapDispatchToProps = {
    filterStudents: filterStudentsAction.filterStudents,
    sortStudents
  };

  export default connect(null,mapDispatchToProps)(Sort);
