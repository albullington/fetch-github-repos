const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname + '/src')));

app.get('/', (req, res) => {
  res.sendStatus(200).send('Hello world');
})

const port = 3000;

app.listen(port, console.log(`Listening on ${port}`));