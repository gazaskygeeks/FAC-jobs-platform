import {
  START,
  SUCCESS
} from '../constants';

export const start = () => {

  return {
    type: START
  };
};
export const success = appointments => {

  return {
    type: SUCCESS,
    payload: appointments
  };
};
export const firstQ = data => dispatch => {
  dispatch(start());
  dispatch(success(data));
};
