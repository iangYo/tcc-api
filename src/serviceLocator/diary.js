const serviceLocator = require('./register');

serviceLocator.register('diaryRepository', () => {
  const mongoose = serviceLocator.get('mongoose');
  const DiaryRepository = require('../repositories/DiaryRepository');
  return new DiaryRepository(mongoose);
});

serviceLocator.register('diaryController', () => {
  const log = serviceLocator.get('logger');
  const diaryRepository = serviceLocator.get('diaryRepository');
  const DiaryController = require('../controllers/DiaryController');
  return new DiaryController(log, diaryRepository);
});

module.exports = serviceLocator;
