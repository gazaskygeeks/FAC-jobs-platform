import { START_LOGIN,SUCCESS_LOGIN ,FAILURE_LOGIN } from '../constants/actionTypes';

const initialState = {
  user: '',
  isLogged: false,
  isFetching: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_LOGIN: {
      return {
        ...state,
        isFetching: true,
        error: undefined
      };
    }
    case SUCCESS_LOGIN: {
      return {
        ...state,
        error: undefined,
        user: action.payload,
        isLogged: true,
        isFetching: false
      };}

    case FAILURE_LOGIN: {
      return {
        ...state,
        error: action.payload,
        isFetching: false

      };
    }
    default:
      return state;
  }
};
