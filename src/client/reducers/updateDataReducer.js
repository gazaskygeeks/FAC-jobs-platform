import {
  UPDATE_DATA_USER,
  FAILURE_UPDATE
} from '../constants/actionTypes';

const initialState = {
  success: '',
  error: undefined
};

const updatedata = (state = initialState , action) => {
  switch (action.type) {
    case UPDATE_DATA_USER: {
      return {
        ...state,
        success: action.payload
      };
    }

    case FAILURE_UPDATE: {
      return {
        ...state,
        error: action.payload
      };
    }
    default:
      return state;

  }
};

export default updatedata;
