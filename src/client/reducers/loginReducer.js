import { START_LOGIN,SUCCESS_LOGIN ,FAILURE_LOGIN } from '../constants';

const initialState = {
  user: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_LOGIN: {
      return {
        ...state,
        error: undefined
      };
    }
    case SUCCESS_LOGIN: {
      return {
        ...state,
        error: undefined,
        user: action.payload
      };}

    case FAILURE_LOGIN: {
      return {
        ...state,
        error: action.payload

      };
    }
    default:
      return state;
  }
};
