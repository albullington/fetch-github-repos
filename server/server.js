const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname + '/dist')));

app.get('/', (req, res) => {
  res.send('Hello world');
})

const port = 3000;

app.listen(port, console.log(`Listening on http://localhost:${port}`));