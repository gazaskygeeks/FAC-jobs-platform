const sortedAlphbetically= allStudents => {
  const alphabetical = allStudents.map(student => {
    return student.username;
  });
  alphabetical.sort();
  const array=[];
  alphabetical.map(student => {
    allStudents.map(studentsData => {
      if (student===studentsData.username) {
        array.push(studentsData);

      }

    });
  });

  return array;
};
const sortedSignupDate= (allStudents,sortdata) => {
  let date_sort;
  const dates = allStudents.map(student => {
    return student.reg_date;
  });
  if (sortdata==='newest to oldest') {
    date_sort = function (date1, date2) {
      if (date1 > date2) return -1;
      if (date1 < date2) return 1;

      return 0;
    };

  } else {
    date_sort = function (date1, date2) {
      if (date1 > date2) return 1;
      if (date1 < date2) return -1;

      return 0;
    };

  }
  dates.sort(date_sort);
  const array=[];
  dates.map(date => {
    allStudents.map(studentsData => {
      if (date===studentsData.reg_date) {
        array.push(studentsData);

      }

    });
  });

  return array;
};

const sortedLastUpdated= allStudents => {
  const dates = allStudents.map(student => {
    return student.update_date;
  });
  const date_sort = function (date1, date2) {
    if (date1 > date2) return 1;
    if (date1 < date2) return -1;

    return 0;

  };
  dates.sort(date_sort);
  const array=[];
  dates.map(date => {
    allStudents.map(studentsData => {
      if (date===studentsData.update_date) {
        array.push(studentsData);

      }

    });
  });

  return array;
};
export default (allStudents,sortdata) => {
  console.log(sortdata,'sortdata');
  if (sortdata==='alphabetical') {
    return sortedAlphbetically(allStudents);
  } else if (sortdata==='last updated') {
    return sortedLastUpdated(allStudents);
  } else {
    return sortedSignupDate(allStudents,sortdata);
  }
};
