const connect = require('../database/dbConnection');

module.exports = (dataUserToUpdate,cb) => {
  const sql = `BEGIN;
   UPDATE users_table
   SET email = '${dataUserToUpdate.email}',display_name = '${dataUserToUpdate.display_name}'
   FROM users_table T1, users_info T2
   WHERE T1.id = T2.user_id
   and T1.id = ${dataUserToUpdate.id};

   UPDATE users_info
   SET interests = '{${dataUserToUpdate.interests}}',skills='{${dataUserToUpdate.skills}}'
   FROM users_table T1, users_info T2
   WHERE T1.id = T2.user_id
   and T1.id = ${dataUserToUpdate.id};

   COMMIT;`;
  connect.query(sql, cb);
};
