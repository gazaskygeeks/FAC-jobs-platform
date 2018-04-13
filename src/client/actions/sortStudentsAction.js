import { SORT_STUDENTS_SUCCESS} from '../constants/actionTypes.js';

export default (data,sortdata) => {
  console.log(sortdata,'sort data action');
  return {
    type: SORT_STUDENTS_SUCCESS,
    payload : {data,sortdata}
  };

};;
