import React, { Component } from 'react';
import { Loader } from 'react-loaders';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as studentDataAction from '../../actions/studentProfile';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Profile from './StudentProfile/StudentProfile.js';
import EmailContact from '../emailContact/EmailContact.js';
import './StudentProfile/StudentProfile.css';
import { BeatLoader } from 'react-spinners';

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
          {
            isFetching
              ? <center className='center'>
                <BeatLoader color={'#66D49D'} loading={isFetching} width={200} />
                <Loader loaded={false} type='ball-pulse-rise' />
                <h1>Info inbound<br/>
                Wait!!</h1>
              </center>
              :<Profile
                studentData={studentData}
              />
          }
          {
            error && (
              <div className='studentData-error'>
                { error }
              </div>
            )
          }
        </div>
        <Footer />
        <EmailContact />
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
