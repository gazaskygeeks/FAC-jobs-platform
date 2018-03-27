import {
  START_LOGIN,
  SUCCESS_LOGIN,
  FAILURE_LOGIN
} from '../constants/actionTypes';

export const start = () => {
  return {
    type: START_LOGIN
  };
};
export const success = data => {

  return {
    type: SUCCESS_LOGIN,
    payload: data
  };
};

export const failure = massage => {
  return {
    type: FAILURE_LOGIN,
    payload: massage
  };
};
export const loginuser= () => dispatch => {
  dispatch(start());
  fetch('/api/v1/current_user',
    { credentials: 'include' })
    .then(res => {
      if (res.status >= 400) {
        throw new Error('Bad Response from server');
      }

      return res.json();
    }).then(data => {

      return dispatch(success(data));
    }).catch(err => dispatch(failure(err.message)));

};
