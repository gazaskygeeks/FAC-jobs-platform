import {
  START_GET_Q,
  SUCCESS_GET_Q,
  FAIL_GET_Q
} from '../constants/actionTypes';
import checkValidSkill from '../helpers/checkValidSkills';
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
      const campuses = ['Gaza','London','Nazareth'];
      const cohorts = ['FACG1','FACG2','FACG3','FACN1',
        'FACN2','FACN3','FAC9','FAC10','FAC11','FAC12'];
      if (!campuses.includes(getState().questionAnswer.compus) ||
       !cohorts.includes(getState().questionAnswer.cohort)) {
        dispatch(failer());

        return 'Please Enter Valid Data inputs';

      } else {
        dispatch(success(data));

      }

    } else {
      dispatch(failer());

      return 'Answer for all of questions, Please!';

    }
  } else if (data==='Q3') {
    if (getState().questionAnswer.interesting !=='') {
      const intersts = ['Freelancing','Mentoring','CFing','Contracts'];

      if (!checkValidSkill(intersts, getState().questionAnswer.interesting)) {
        return 'Please Enter Valid Data inputs';
        dispatch(failer());
      } else {
        dispatch(success(data));

      }

    } else {
      dispatch(failer());

      return 'Answer for all of questions, Please!';

    }
  } else if (data==='Q4') {
    if ((getState().questionAnswer.skills !=='')&&(getState().questionAnswer.skills.length>=3)) {
      const skills =
      ['React.js','Node.js','JavaScript','HTML','CSS','CSS3','HTML5','Express.js','PostgreSQL'];
      if (!checkValidSkill(skills, getState().questionAnswer.skills)) {
        return 'Please Enter Valid Data inputs';
        dispatch(failer());
      } else {
        dispatch(success(data));

      }

    } else {
      dispatch(failer('Answer for all of questions, please'));

      return 'Choose at least 3 tech, Please!';
    }

  } else if (data==='Q5') {
    if ((getState().questionAnswer.stackoverflow !=='')
    ||(getState().questionAnswer.linkedin!=='')) {
      if (getState().questionAnswer.stackoverflow.toLowerCase().includes('stackoverflow') ||
        getState().questionAnswer.linkedin.toLowerCase().includes('linkedin')) {
        dispatch(success(data));
      }
      dispatch(failer());

      return 'Please Enter Valid Urls';

    } else {
      dispatch(failer(''));

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
    if ((getState().questionAnswer.projects.length !==0)&&
    ((getState().questionAnswer.projects.project1.name.trim()!==''
    &&getState().questionAnswer.projects.project1.link.trim()!=='')
    &&(getState().questionAnswer.projects.project2.name.trim()!==''
    &&getState().questionAnswer.projects.project2.link.trim()!==''))
    &&getState().questionAnswer.cv!=='') {
      dispatch(success(data));

    } else {
      dispatch(failer('Answer for all of questions, please'));

      return 'Put at least one link for your project & upload CV, Please!';

    }
  } else {
    dispatch(success(data));
  }
};
