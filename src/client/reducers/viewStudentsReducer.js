import {
  STUDENTS_FETCH_START,
  STUDENTS_FETCH_SUCCESS,
  STUDENTS_FETCH_FAILURE,
  FILTER_STUDENTS_START,
  FILTER_STUDENTS_SUCCESS
} from '../constants/actionTypes.js';

import filterHelper from '../helpers/filter';

const initalState = {
  dataStudents: [],
  dataStudentsToFilter: [],
  error: undefined,
  isFetching: false
};

const students = (state = initalState, action) => {
  switch (action.type) {
    case STUDENTS_FETCH_START: {
      return {
        ...state,
        isFetching: true
      };
    }
    case STUDENTS_FETCH_SUCCESS: {
      return {
        ...state,
        dataStudents: action.payload,
        dataStudentsToFilter: action.payload,
        isFetching: false
      };
    }
    case STUDENTS_FETCH_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    }
    case FILTER_STUDENTS_START: {
      return {
        ...state,
        isFetching: true
      };
    }
    case FILTER_STUDENTS_SUCCESS: {
      return {
        ...state,
        dataStudentsToFilter: filterHelper(action.payload.data, action.payload.keys)
      };
    }
    default:
      return state;

  }
};

export default students;
