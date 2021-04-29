const express = require('express');
const routes = require('./routes');

var clc = require ("cli-color")

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3334, () => console.log('Server is running', clc.magentaBright('༼ つ ◕_◕ ༽つ')));