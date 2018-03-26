import {
  START_GET_Q,
  SUCCESS_GET_Q
} from '../constants/actionTypes';

export const start = () => {

  return {
    type: START_GET_Q
  };
};
export const success = data => {

  return {
    type: SUCCESS_GET_Q,
    payload: data
  };
};
export const firstQ = data => dispatch => {
  dispatch(start());
  dispatch(success(data));
};
