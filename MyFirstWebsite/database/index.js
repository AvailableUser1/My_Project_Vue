const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',  // 数据库主机名
  user: 'root',       // 数据库用户名
    password: 'root', // 数据库密码
  database: 'test' // 数据库名
});

connection.query('SELECT * FROM student', (err, results) => {
    if (err) throw err;
    console.log(results);
});