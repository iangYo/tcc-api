const serviceLocator = require('./register');

serviceLocator.register('authRepository', () => {
  const mongoose = serviceLocator.get('mongoose');
  const hashPassword = serviceLocator.get('hash');
  const AuthRepository = require('../repositories/AuthRepository');
  return new AuthRepository(mongoose, hashPassword);
});

serviceLocator.register('authController', () => {
  const log = serviceLocator.get('logger');
  const jwt = serviceLocator.get('jwt');
  const validatePassword = serviceLocator.get('validatePassword');
  const authRepository = serviceLocator.get('authRepository');
  const AuthController = require('../controllers/AuthController');
  return new AuthController(log, jwt, authRepository, validatePassword);
});

module.exports = serviceLocator;
