import { combineReducers } from 'redux';

import students from './viewStudentsReducer';
import studentData from './studentProfile-reducer';

export default combineReducers({
  students,
  studentData

});
