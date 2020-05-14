var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const db = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '98239823',
  database: 'test_db',
});

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/testdb', function (req, res, next) {
  db.query('SELECT * from users', (err, rows) => {
    if (err) throw err;

    res.send(rows);
  });
});

module.exports = router;
