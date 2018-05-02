import {
  START_SETTINGS,
  SUCCESS_SETTINGS,
  FAILURE_SETTINGS
} from '../constants/actionTypes';

const start = () => {
  return {
    type: START_SETTINGS
  };
};
const success = data => {

  return {
    type: SUCCESS_SETTINGS,
    payload: data
  };
};

const failure = massage => {
  return {
    type: FAILURE_SETTINGS,
    payload: massage
  };
};
export default () => dispatch => {
  dispatch(start());
  fetch('/api/v1/getdatausersettings',
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
