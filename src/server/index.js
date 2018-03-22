const http = require('http');
const app = require('./app.js');

const server = http.createServer(app);
server.listen(process.env.PORt || 3000 , () => {
  console.log('RUNNING ON 3000');
});
