import { START_GET_Q,SUCCESS_GET_Q } from '../constants/actionTypes';

const initialState = {
  questionNumber: 'Welcome'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_GET_Q: {
      return {
        ...state,
        error: undefined
      };
    }
    case SUCCESS_GET_Q: {
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
