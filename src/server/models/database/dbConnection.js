const { Pool } = require('pg');
require('env2')('./config.env');
let data_url;

if (!process.env.DATABASE_URL) {
  throw new Error('DB url not found ');
}
if (process.env.NODE_ENV === 'test') {
  // data_url = process.env.DATABASE_URL_TEST;
} else {
  data_url = process.env.DATABASE_URL;
}

module.exports = new Pool({ connectionString: data_url, ssl: true });
