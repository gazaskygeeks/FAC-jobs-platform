const connect = require('../database/dbConnection');

module.exports = (dataUserToUpdate,cb) => {
  const sql = `BEGIN;
   UPDATE users_table
   SET email = '${dataUserToUpdate.email}',display_name = '${dataUserToUpdate.display_name}'
   WHERE id = ${dataUserToUpdate.id};

   UPDATE users_info
   SET interests = '{${dataUserToUpdate.interests}}',skills='{${dataUserToUpdate.skills}}'
   WHERE  user_id = ${dataUserToUpdate.id};

   COMMIT;`;
  connect.query(sql, cb);
};
