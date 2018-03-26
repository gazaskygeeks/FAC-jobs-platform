import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Students from './students';
import Filter from './filter';

import { BeatLoader } from 'react-spinners';

import * as viewStudentsAction from '../../actions/viewStudentsAction';

// import NavBar from '../navbar/Navbar.js';
import Footer from '../footer/Footer.js';
import './style.css';

class AdminDashboard extends Component {
  componentDidMount() {
    const { fetchStudentsView } = this.props;
    fetchStudentsView();
  }
  render() {
    const { isFetching, error , dataStudents } = this.props.data;

    return (

      <div className='admindashboard'>
        {/* <NavBar /> */}
        <div className='admindashboard__container'>
          <div className='admindashboard__students'>
            <center className='beatLoader'>
              {isFetching && (
                <BeatLoader color={'#66D49D'} loading={isFetching} width={200} />
              )}
            </center>
            {error && <div className='data-error'>{error}</div>}

            {dataStudents.map(dataStudent => {
              return <Students dataStudent={dataStudent} key={dataStudent.id}/>;
            })}
          </div>
          <div className='admindashboard__filter'>
            <Filter allStudents={dataStudents}/>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

AdminDashboard.propTypes = {
  fetchStudentsView: PropTypes.func,
  data: PropTypes.obj,
  dataStudents: PropTypes.array,
  error: PropTypes.string,
  isFetching: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    data: state.students,
    error: state.error,
    isFetching: state.isFetching
  };
};
const mapDispatchToProps = {
  fetchStudentsView: viewStudentsAction.fetchStudentsView
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
