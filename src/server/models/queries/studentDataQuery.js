const dbConnection = require('../database/dbConnection');

const studentData = (student_id , cb) => {
  const sql = {
    text: `SELECT * FROM users_info
                    INNER JOIN users_table ON users_table.id = users_info.id
                    WHERE user_id = $1`,

    values: [student_id]
  };
  dbConnection.query(sql, (dataBaseConnectionErorr, data) => {
    if (dataBaseConnectionErorr) return cb(dataBaseConnectionErorr);

    return cb(null, data.rows);

  });
};

module.exports = {
  studentData
};
