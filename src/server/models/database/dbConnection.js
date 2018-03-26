const { Pool } = require('pg');
require('env2')('./config.env');

if (!process.env.DATABASE_URL) {
  throw new Error('DB url not found ');
} else {
  module.exports = new Pool({ connectionString: process.env.DATABASE_URL, ssl: true });
}
