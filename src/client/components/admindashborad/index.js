import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Students from './students';
import Filter from './filter';

import { BeatLoader } from 'react-spinners';

import * as viewStudentsAction from '../../actions/viewStudentsAction';

import NavBar from '../navbar/Navbar.js';
import Footer from '../footer/Footer.js';
import './style.css';

class AdminDashboard extends Component {
  componentDidMount() {
    const { fetchStudentsView } = this.props;
    fetchStudentsView();
  }
  render() {
    const { isFetching, error , dataStudents,dataStudentsToFilter } = this.props.data;

    return (

      <div className='admindashboard'>
        <NavBar allStudents={dataStudents}/>
        <div className='admindashboard__container'>
          <div className='admindashboard__students'>
            {isFetching ?
              <center className='admindashboard__beatLoader'>
                <BeatLoader color={'#66D49D'} loading={isFetching} width={200} />
              </center>
              :

              (dataStudentsToFilter.length === 0)?
                <div className='admindashboard__beatLoader'>Sorry, There Is No Result.</div>
                :dataStudentsToFilter.map((dataStudent,i) => {
                  while (dataStudent !== undefined && i<dataStudentsToFilter.length) {
                    return <Students props={this.props}
                      dataStudent={dataStudent} key={dataStudent.id}/>;

                  }
                })

            }
            {error && <div className='data-error'>{error}</div>}

          </div>
          <div className='adm indashboard__filter'>
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
  data: PropTypes.object,
  dataStudents: PropTypes.object,
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
