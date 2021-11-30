require('dotenv').config();
require('./serviceLocator');
require('./services/database');

const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.disable('x-powered-by');
app.use(express.json());
app.use(compression());
app.use(cors());
app.use(morgan('dev'));

app.use(require('./routes'));

module.exports = { app };
