import { START,SUCCESS } from '../constants';

const initialState = {
  questionNumber: 'Welcome'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START: {
      return {
        ...state,
        error: undefined
      };
    }
    case SUCCESS: {
      return {
        ...state,
        error: undefined,
        questionNumber: action.payload
      };
    }
    default:
      return state;
  }
};
