import { combineReducers } from 'redux';

import data from './quesionReducer';
import questionAnswer from './questionsAnswerReducer';
import login from './loginReducer';
export default combineReducers({
  data,
  questionAnswer,
  login
});
