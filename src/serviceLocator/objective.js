const serviceLocator = require('./register');

serviceLocator.register('objectiveRepository', () => {
  const mongoose = serviceLocator.get('mongoose');
  const ObjectiveRepository = require('../repositories/ObjectiveRepository');
  return new ObjectiveRepository(mongoose);
});

serviceLocator.register('objectiveController', () => {
  const log = serviceLocator.get('logger');
  const objectiveRepository = serviceLocator.get('objectiveRepository');
  const ObjectiveController = require('../controllers/ObjectiveController');
  return new ObjectiveController(log, objectiveRepository);
});

module.exports = serviceLocator;
