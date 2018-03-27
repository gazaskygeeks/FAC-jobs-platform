import { combineReducers } from 'redux';
import students from './viewStudentsReducer';
import studentData from './studentProfile-reducer';
import data from './quesionReducer';
import questionAnswer from './questionsAnswerReducer';
import login from './loginReducer';

export default combineReducers({
  data,
  questionAnswer,
  login,
  studentData,
  students
});
