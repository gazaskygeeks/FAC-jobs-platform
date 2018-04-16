import { START_LOGIN,SUCCESS_LOGIN ,FAILURE_LOGIN } from '../constants/actionTypes';
import { REQUEST_FAILED ,REQUEST_PENDING , REQUEST_SUCCEDED } from '../constants/requestStatuses';
const initialState = {
  user: '',
  isLogged: false,
  reqestStatus: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_LOGIN: {
      return {
        ...state,
        reqestStatus: REQUEST_PENDING,
        error: undefined
      };
    }
    case SUCCESS_LOGIN: {
      return {
        ...state,
        error: undefined,
        user: action.payload,
        isLogged: true,
        reqestStatus: REQUEST_SUCCEDED
      };}

    case FAILURE_LOGIN: {
      return {
        ...state,
        error: action.payload,
        reqestStatus: REQUEST_FAILED
      };
    }
    default:
      return state;
  }
};
