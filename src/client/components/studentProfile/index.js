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
  constructor(props) {
    super(props);
    this.state={ coming: '' };
  }

  componentDidMount() {
    const { fetchStudentData } = this.props;
    fetchStudentData(this.props.match.params.student_name);
    if (this.props.history.location.state !== undefined) {

      this.setState({ coming: this.props.history.location.state.coming });
    } else {
      this.setState({ coming: '' });

    }
  }
  render() {
    const { isFetching , error , studentData } = this.props;

    return (
      <div>

        <div>
          {
            isFetching
              ? <center className='center studentProfile__BeatLoader'>
                <BeatLoader color={'#66D49D'} loading={isFetching} width={200} />
                <Loader loaded={false} type='ball-pulse-rise' />
                <h1>Info inbound<br/>
                Wait!!</h1>
              </center>
              :<div>
                <Navbar coming={this.state.coming} studentData={studentData} propsNav={this.props}/>
                <Profile
                  coming={this.state.coming}
                  studentData={studentData}
                />
                <Footer />

              </div>
          }
          {
            error && (
              <div className='studentData-error'>
                { error }
              </div>
            )
          }
        </div>
<<<<<<< HEAD
        <Footer />
        <EmailContact />
=======
>>>>>>> 49c2bf7867c9f3d604190dcd52e7a2649b2dd54d
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
  history: PropTypes.object,
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
