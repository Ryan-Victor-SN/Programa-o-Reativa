const express = require('express');

const port = 3000;
const host = '0.0.0.0';
const app = express();
app.use(express.json())

const routers = require('./api')

app.use('/', routers)

app.listen(port, host);