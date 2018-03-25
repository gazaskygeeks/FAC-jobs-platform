import {
  STUDENTS_FETCH_START,
  STUDENTS_FETCH_SUCCESS,
  STUDENTS_FETCH_FAILURE
} from '../constants/actionTypes.js';

const initalState = {
  dataStudents: [],
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
    default:
      return state;

  }
};

export default students;
