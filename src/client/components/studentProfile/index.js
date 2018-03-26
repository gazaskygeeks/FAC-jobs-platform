import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as studentDataAction from '../../actions/studentProfile';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Profile from './StudentProfile/StudentProfile.js';
import './StudentProfile/StudentProfile.css';

class StudentProfile extends Component {
  componentDidMount() {
    const { fetchStudentData } = this.props;
    fetchStudentData(this.props.match.params.student_id);
  }
  render() {
    const { isFetching , error , studentData } = this.props;

    return (
      <div>
        <Navbar />
        <div>
          <Profile
            studentData={studentData}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

StudentProfile.propTypes = {
  fetchStudentData: PropTypes.func,
  studentData: PropTypes.array,
  error: PropTypes.string,
  isFetching: PropTypes.bool,
  student_id: PropTypes.string,
  match: PropTypes.object
};

const mapStateToProps = state => {
  return {
    studentData: state.studentData.studentData,
    error: state.studentData.error,
    isFetching: state.studentData.isFetching
  };
};

export default connect(mapStateToProps, studentDataAction)(StudentProfile);
