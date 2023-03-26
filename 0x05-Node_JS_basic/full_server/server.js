#!/usr/bin/node
// a simple express server

const routes  = require('./routes/index');
const express = require('express');

const app = express();

app.use('/', routes);

app.listen(1245, '127.0.0.1');

export default app;
