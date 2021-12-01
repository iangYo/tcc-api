const serviceLocator = require('./register');
const configs = require('../config/env');

serviceLocator.register('logger', () => {
  return require('../config/logger').create(configs.application_logging);
});

serviceLocator.register('mongoose', () => {
  return require('mongoose');
});

serviceLocator.register('jwt', () => {
  return require('jsonwebtoken');
});

serviceLocator.register('hash', () => {
  return require('../helpers/password/hash');
});

serviceLocator.register('validatePassword', () => {
  return require('../helpers/password/validate');
});

module.exports = serviceLocator;
