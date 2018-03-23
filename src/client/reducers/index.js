import { combineReducers } from 'redux';

import data from './quesionReducer';
import questionAnswer from './questionsAnswerReducer';

export default combineReducers({
  data,
  questionAnswer
});
