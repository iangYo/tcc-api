const serviceLocator = require('./register');

serviceLocator.register('authRepository', () => {
  const mongoose = serviceLocator.get('mongoose');
  const hashPassword = serviceLocator.get('hash');
  const AuthRepository = require('../repositories/AuthRepository');
  return new AuthRepository(mongoose, hashPassword);
});

serviceLocator.register('authController', () => {
  const log = serviceLocator.get('logger');
  const authRepository = serviceLocator.get('authRepository');
  const AuthController = require('../controllers/AuthController');
  return new AuthController(log, authRepository);
});

module.exports = serviceLocator;
