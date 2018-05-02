import {
  START_SETTINGS,
  SUCCESS_SETTINGS,
  FAILURE_SETTINGS
} from '../constants/actionTypes';

const initialState = {
  studentData: [],
  error: undefined,
  isFetching: false
};

const getStudentDataToSettings = (state = initialState , action) => {
  switch (action.type) {
    case START_SETTINGS: {
      return {
        ...state,
        isFetching: true
      };
    }

    case SUCCESS_SETTINGS: {
      return {
        ...state,
        studentData: action.payload,
        isFetching: false
      };
    }

    case FAILURE_SETTINGS: {
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

export default getStudentDataToSettings;
