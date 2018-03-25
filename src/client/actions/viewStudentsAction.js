import {
  STUDENTS_FETCH_START,
  STUDENTS_FETCH_SUCCESS,
  STUDENTS_FETCH_FAILURE
} from '../constants/actionTypes.js';

export const studentsFetchStart = () => {

  return {
    type: STUDENTS_FETCH_START
  };
};

export const studentsFetchSuccess = dataStudents => {

  return {
    type: STUDENTS_FETCH_SUCCESS,
    payload: dataStudents
  };
};

export const studentsFetchFailure = massage => {

  return {
    type: STUDENTS_FETCH_FAILURE,
    error: massage
  };
};

export const fetchStudentsView = () => dispatch => {
  dispatch(studentsFetchStart());
  fetch('/api/v1/students')
    .then(res => {
      if (res.status >= 400) {
        throw new Error('Bad response from sarver');
      }

      return res.json();
    })
    .then(data => dispatch(studentsFetchSuccess(data)))
    .catch(err => dispatch(studentsFetchFailure(err.massage)));
};
