import {
  UPDATE_DATA_USER,
  FAILURE_UPDATE
} from '../constants/actionTypes';

const dataUpdateSuccess = massage => {
  return {
    type: UPDATE_DATA_USER,
    payload: massage
  };
};
const dataUpdateFailure = massage => {
  return {
    type: FAILURE_UPDATE,
    payload: massage
  };
};
export const UpdateDataUser= data => dispatch => {
  console.log('yes  im heeere');
  fetch('/api/v1/updatedata', {
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

      return response;
    })
    .then(success => dispatch(dataUpdateSuccess(success.message)))
    .catch(err => dispatch(dataUpdateFailure(err.massage)));

};
