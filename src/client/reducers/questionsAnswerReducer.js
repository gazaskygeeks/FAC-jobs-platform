import {
  STORE_ANSWER,STORE_DATA_FAILURE,STORE_DATA_SUCCESS
} from '../constants/actionTypes';

const initialState = {
  compus: '',
  cohort: '',
  interesting: '',
  skills: '',
  stackoverflow: '',
  linkedin: '',
  opportunity: '',
  portfolio: '',
  projects: '',
  cv: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case STORE_ANSWER:
      return {
        ...state,
        [payload.name]: payload.value
      };
    case STORE_DATA_FAILURE:
      return {
        ...state,
        message: 'fail'
      };
    case STORE_DATA_SUCCESS:
      return {
        ...state,
        message: payload
      };
    default:
      return state;
  }
};
