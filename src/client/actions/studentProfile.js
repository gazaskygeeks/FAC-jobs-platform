import {
  STUDENTDATA_FETCH_START,
  STUDENTDATA_FETCH_SUCCESS,
  STUDENTDATA_FETCH_FAILURE
} from '../constants/actionTypes.js';

export const studntDataFetchStart = () => {

  return {
    type: STUDENTDATA_FETCH_START
  };
};

export const studentDataFetchSuccess = studentData => {

  return {
    type: STUDENTDATA_FETCH_SUCCESS,
    payload: studentData
  };
};

export const studentDataFetchFailure = massage => {

  return {
    type: STUDENTDATA_FETCH_FAILURE,
    error: massage
  };
};

export const fetchStudentData = student_id => dispatch => {
  dispatch(studntDataFetchStart());
  fetch(`/api/v1/getstudent/${student_id}`)
    .then(res => {
      if (res.status >= 400) {
        throw new Error('Bad response from server');
      }

      return res.json();
    })
    .then(studentData => dispatch(studentDataFetchSuccess(studentData)))
    .catch(err => dispatch(studentDataFetchFailure(err.massage)));
};
