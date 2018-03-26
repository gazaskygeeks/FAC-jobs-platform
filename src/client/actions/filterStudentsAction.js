import { FILTER_STUDENTS } from '../constants/actionTypes.js';

export const filterStudents = (data, keys) => {
  return {
    type: FILTER_STUDENTS,
    payload: { data, keys }
  };
};
