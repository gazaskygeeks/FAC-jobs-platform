import {
  START_LOGIN,
  SUCCESS_LOGIN,
  FAILURE_LOGIN,
  SUCCESS_GET_NEW_USER
} from '../constants/actionTypes';

export const start = () => {
  return {
    type: START_LOGIN
  };
};
export const success = data => {
  console.log(data,'data in success');

  return {
    type: SUCCESS_LOGIN,
    payload: data
  };
};
export const getNewUserSuccess = data => {
  return {
    type: SUCCESS_GET_NEW_USER,
    payload: data
  };
};

export const failure = massage => {
  return {
    type: FAILURE_LOGIN,
    payload: massage
  };
};
export const loginuser = () => dispatch => {
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

export const newuser = () => dispatch => {
  dispatch(start());
  fetch('/api/v1/newuser',
    { credentials: 'include' })
    .then(res => {
      if (res.status >= 400) {
        throw new Error('Bad Response from server');
      }

      return res.json();
    }).then(data => {

      return dispatch(getNewUserSuccess(data));
    }).catch(err => dispatch(failure(err.message)));
};
