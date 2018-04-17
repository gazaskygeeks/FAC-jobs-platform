import { SEND_SUCCESS,
  SEND_FAIL } from '../constants/actionTypes';

const initialState = {
  success: '',
  error: undefined
};

const updatedata = (state = initialState , action) => {
  switch (action.type) {
    case SEND_SUCCESS: {
      return {
        ...state,
        success: 'success sending mail'
      };
    }

    case SEND_FAIL: {
      return {
        ...state,
        error: 'error sending mail'
      };
    }
    default:
      return state;

  }
};

export default updatedata;
