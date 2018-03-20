import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Students from './students';
import Filter from './filter';

import { BeatLoader } from 'react-spinners';

import * as viewStudentsAction from '../../actions/viewStudentsAction';

import './style.css';

class Admindashboard extends Component {
  componentDidMount() {
    const { fetchStudentsView } = this.props;
    fetchStudentsView();

  }
  render() {
    const { isFetching, error , dataStudents } = this.props.data;
    // const dataStudents = this.props.data.dataStudents;
    console.log(dataStudents,'aaaaaaaaaaa');
    console.log(isFetching,' isFetching');

    return (

      <div className='admindashboard'>
        <div className='testNav'></div>
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
            <Filter />
          </div>
        </div>
        <div className='testNav'></div>
      </div>
    );
  }
}

Admindashboard.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Admindashboard);
