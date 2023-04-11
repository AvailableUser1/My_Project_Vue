connection.query('SELECT * FROM mytable', (err, results) => {
  if (err) throw err;
  console.log(results);
});