import {
  START_GET_Q,
  SUCCESS_GET_Q,
  FAIL_GET_Q
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
export const failer = message => {
  return {
    type: FAIL_GET_Q,
    error: message
  };
};

export const firstQ = data => (dispatch, getState) => {
  dispatch(start());
  if (data==='Q2') {
    if ((getState().questionAnswer.cohort !=='')&&(getState().questionAnswer.compus !=='')) {
      dispatch(success(data));

    } else {
      dispatch(failer('Answer for all of questions, please'));

      return 'Answer for all of questions, Please!';

    }
  } else if (data==='Q3') {
    if (getState().questionAnswer.interesting !=='') {
      dispatch(success(data));

    } else {
      dispatch(failer('Answer for all of questions, please'));

      return 'Answer for all of questions, Please!';

    }
  } else if (data==='Q4') {
    if ((getState().questionAnswer.skills !=='')&&(getState().questionAnswer.skills.length>=3)) {
      dispatch(success(data));

    } else {
      dispatch(failer('Answer for all of questions, please'));

      return 'Choose at least 3 tech, Please!';

    }
  } else if (data==='Q5') {
    if ((getState().questionAnswer.stackoverflow !=='')||(getState().questionAnswer.linkedin!=='')) {
      dispatch(success(data));

    } else {
      dispatch(failer('Answer for all of questions, please'));

      return 'Fill one input at least, Please!';

    }
  } else if (data==='Q6') {
    if (getState().questionAnswer.opportunity !=='') {
      dispatch(success(data));

    } else {
      dispatch(failer('Answer for all of questions, please'));

      return 'Choose one of these, Please!';

    }
  } else if (data==='End') {
    if (getState().questionAnswer.projects !=='') {
      dispatch(success(data));

    } else {
      dispatch(failer('Answer for all of questions, please'));

      return 'Put at least one link for your project, Please!';

    }
  } else {
    dispatch(success(data));
  }
};
