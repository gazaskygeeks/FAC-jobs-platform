import {
  START,
  SUCCESS
} from '../constants';

export const start = () => {

  return {
    type: START
  };
};
export const success = data => {

  return {
    type: SUCCESS,
    payload: data
  };
};
export const firstQ = data => dispatch => {
  dispatch(start());
  dispatch(success(data));
};
