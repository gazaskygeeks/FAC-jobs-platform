const dbConnection = require('../database/dbConnection.js');

const viewAllStudents = cb => {
  const sql = {
    text: `select * from users_info join users_table on(users_info.user_id
                = users_table.id)`
  };
  dbConnection.query(sql, (dataBaseConnectionErorr, dataUser) => {
    console.log(dataBaseConnectionErorr,' dataBaseConnectionErorr');
    if (dataBaseConnectionErorr) return cb(dataBaseConnectionErorr);
    console.log('data user : ', dataUser.rows);

    return cb(null, dataUser.rows);
  });
};

module.exports = viewAllStudents;
