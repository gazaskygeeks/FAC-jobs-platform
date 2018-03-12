const morgan = require('morgan');
const bodyParser = require('body-parser');
const logger = require('./logger.js');
const path = require('path');

module.exports = (app, express) => {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, '../../../public')));
  app.use(bodyParser.json());
  app.use(logger);
};
