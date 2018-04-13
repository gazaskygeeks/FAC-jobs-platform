const connect = require('../database/dbConnection');

const post = {};
post.users = (
  github_id, github_name,
  github_username, github_email,
  github_avatar, new_user,
  github_url,is_admin,bio,
  callback) => {
  const sqlQuery ={ text: `
    INSERT INTO users_table (github_id,display_name,username,email,avatar,new_user,profile_url,is_admin,bio)
    VALUES ($1, $2, $3, $4, $5, $6,$7,$8,$9)
    RETURNING *
  `,
  values: [github_id, github_name,
    github_username, github_email,
    github_avatar, new_user,
    github_url,is_admin,bio] };
  connect.query(sqlQuery, (err,res) => {
    if (err) {
      console.log(err);
      console.log(sqlQuery,'sql query');

      return callback(new Error('Database error while adding new user'));
    }
    callback(null, res.rows[0]);
  });
};

module.exports = post;
