const connect = require('../database/dbConnection');

const post = {};

post.users = (github_id, github_name, github_email, github_avatar, new_user, github_url,role,callback)=>{
  const sqlQuery = `
    INSERT INTO users_table (github_id,name,email,avatar,newUser,profile_url)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;
  connect.query(sqlQuery, [github_id,github_name, github_email, github_avatar, new_user, github_url], (err,res) => {
    if (err) {
      console.log('err',err);
      return callback(new Error('Database error while adding new user'));
    }
    callback(null, res.rows[0]);
  });
};

module.exports = post;
