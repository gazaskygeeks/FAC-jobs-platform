const dbConnection = require('../database/dbConnection.js');

const viewAllStudents = cb => {
  const sql = {
    text: `select * from users_info join users_table on(users_info.user_id
                = users_table.id)`
  };
  dbConnection.query(sql, (dataBaseConnectionErorr, dataUser) => {
    console.log(dataUser.rows, 'datarowws');
    if (dataBaseConnectionErorr) return cb(dataBaseConnectionErorr);

    return cb(null, dataUser.rows);
  });
};

module.exports = viewAllStudents;
