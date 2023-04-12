const express = require("express");
const app = express();
const port = 3000; // 指定端口号

const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "test",
});

connection.query("SELECT * FROM student_info", (err, results, fields) => {
  if (err) {
    console.error("查询失败: " + err.stack);
    return;
  }
  console.log("查询结果：", results);
  // 在这里可以处理查询结果
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
app.get("/", (req, res) => {
  res.send("Hello Express!");
});
