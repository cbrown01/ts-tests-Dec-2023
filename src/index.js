const express = require('express');
const { resolve } = require('path');

const pkg = require('../package.json');
const schema = require('../etc/schemas/config.json');

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.send([pkg?.name, pkg?.version, schema?.title].join(' :: '));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
