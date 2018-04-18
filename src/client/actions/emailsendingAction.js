import { SEND_START,
  SEND_SUCCESS,
  SEND_FAIL } from '../constants/actionTypes';

const start = () => {
  return {
    type: SEND_START
  };
};
const success = data => {
  return {
    type: SEND_SUCCESS,
    payload: data
  };
};

const failure = massage => {
  return {
    type: SEND_FAIL,
    payload: massage
  };
};

export default data => dispatch => {
  dispatch(start());
  fetch('/api/v1/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    credentials: 'include'
  })
    .then(response => {
      if (response.status >= 400) {
        throw new Error('Bad response From Sarver In Reserve');
      }
      dispatch(success('done'));
    })
    .catch(err => dispatch(failure(err)));

};
