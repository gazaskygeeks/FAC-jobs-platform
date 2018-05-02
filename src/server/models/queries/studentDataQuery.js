const dbConnection = require('../database/dbConnection');

const studentData = (student_name , cb) => {
  const sql = {
    text: `SELECT * FROM users_info
                    INNER JOIN users_table ON users_table.id = users_info.user_id
                    WHERE username = $1`,

    values: [student_name]
  };
  dbConnection.query(sql, (dataBaseConnectionErorr, data) => {
    if (dataBaseConnectionErorr) return cb(dataBaseConnectionErorr);

    return cb(null, data.rows);

  });
};
const newUser = (student_name , cb) => {
  const sql = {
    text: 'SELECT new_user FROM users_table WHERE username = $1',

    values: [student_name]
  };
  dbConnection.query(sql, (dataBaseConnectionErorr, data) => {
    if (dataBaseConnectionErorr) return cb(dataBaseConnectionErorr);

    return cb(null, data.rows);

  });
};

module.exports = {
  studentData,newUser
};
