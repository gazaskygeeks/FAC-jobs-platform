import {
  STORE_ANSWER
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
    default:
      return state;
  }
};
