import {
  STORE_ANSWER,
  STORE_DATA_FAILURE,STORE_DATA_SUCCESS
} from '../constants/actionTypes';

export const compilationOfAnswers = data => {
  return {
    type: STORE_ANSWER,
    payload: data
  };
};

export const dataSavedFailure = massage => {
  return {
    type: STORE_DATA_FAILURE,
    payload: massage
  };
};
export const dataSAvedSuccess = massage => {
  return {
    type: STORE_DATA_SUCCESS,
    payload: massage
  };
};
export const saveAnswer= () => (dispatch, getState) => {
  const data = { questionAnswer: getState().questionAnswer,id: getState().login.user.id,name: getState().login.user.name };

  fetch('/api/v1/storeanswer', {
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
      dispatch(dataSAvedSuccess('done'));
    })
    .catch(err => dispatch(dataSavedFailure(err)));

};
