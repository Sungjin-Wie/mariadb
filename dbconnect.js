const mysql = require('mysql');
const db = mysql.createConnection({
  host: 'localhost',
  port: 3360,
  user: 'root',
  password: '98239823',
  database: 'test_db',
});

module.exports = db;
