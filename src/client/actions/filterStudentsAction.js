import { FILTER_STUDENTS_SUCCESS } from '../constants/actionTypes.js';

export const filterStudents = (data, keys) => {
  return {
    type: FILTER_STUDENTS_SUCCESS,
    payload: { data, keys }
  };
};
