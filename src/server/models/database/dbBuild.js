const fs = require('fs');

const dbConnection = require('./dbConnection');

const sql = fs.readFileSync(`${__dirname}/build.sql`).toString();

dbConnection.query(sql, (errDB, result) => {
  if (errDB) {
    console.log('Error', errDB);
  } else {
    console.log('Building successfuly!');
  }
});
