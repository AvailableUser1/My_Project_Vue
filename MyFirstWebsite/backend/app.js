const express = require('express');
const app = express();
const port = 3000; // 指定端口号
app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});
app.get('/', (req, res) => {
    res.send('Hello Express!');
});
