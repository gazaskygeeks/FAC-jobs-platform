import {
  STUDENTDATA_FETCH_START,
  STUDENTDATA_FETCH_FAILURE,
  STUDENTDATA_FETCH_SUCCESS
} from '../constants/actionTypes';

const initialState = {
  studentData: [],
  error: undefined,
  isFetching: false
};

const studentData = (state = initialState , action) => {
  switch (action.type) {
    case STUDENTDATA_FETCH_START: {
      return {
        ...state,
        isFetching: true
      };
    }

    case STUDENTDATA_FETCH_SUCCESS: {
      return {
        ...state,
        studentData: action.payload,
        isFetching: false
      };
    }

    case STUDENTDATA_FETCH_FAILURE: {
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

export default studentData;
