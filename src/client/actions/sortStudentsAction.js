import { SORT_STUDENTS_SUCCESS } from '../constants/actionTypes.js';

export default (data,sortdata) => {
  return {
    type: SORT_STUDENTS_SUCCESS,
    payload: { data,sortdata }
  };

}; ;
