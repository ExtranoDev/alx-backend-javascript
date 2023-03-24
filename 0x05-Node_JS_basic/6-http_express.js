#!/usr/bin/node
// Basic server using express

const express = require('express');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, '127.0.0.1');

module.exports = app;
