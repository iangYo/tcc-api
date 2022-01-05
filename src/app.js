require('dotenv').config();
require('./serviceLocator');
require('./services/database');

const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const cors = require('cors');
const promBundle = require('express-prom-bundle');

const app = express();

const metricsMiddleware = promBundle({
  includeMethod: true,
  includePath: true,
  includeUp: true,
  customLabels: { project_name: 'api', project_type: 'test_metrics_labels' },
  promClient: {
    collectDefaultMetrics: {}
  }
});

app.use(metricsMiddleware);
app.disable('x-powered-by');
app.use(express.json());
app.use(compression());
app.use(cors());
app.use(morgan('dev'));

app.use(require('./routes'));

module.exports = { app };
