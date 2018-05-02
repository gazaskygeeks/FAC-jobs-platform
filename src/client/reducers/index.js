import { combineReducers } from 'redux';

import students from './viewStudentsReducer';
import studentData from './studentProfile-reducer';
import data from './quesionReducer';
import questionAnswer from './questionsAnswerReducer';
import login from './loginReducer';
import getStudentDataToSettings from './settingsReducer';
import updatedata from './updateDataReducer';
import send from './sendEmailReducer';

export default combineReducers({
  data,
  questionAnswer,
  login,
  studentData,
  students,
  getStudentDataToSettings,
  updatedata,
  send

});
