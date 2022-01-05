const serviceLocator = require('./register');

serviceLocator.register('commentRepository', () => {
  const mongoose = serviceLocator.get('mongoose');
  const CommentRepository = require('../repositories/CommentRepository');
  return new CommentRepository(mongoose);
});

serviceLocator.register('commentController', () => {
  const log = serviceLocator.get('logger');
  const commentRepository = serviceLocator.get('commentRepository');
  const CommentController = require('../controllers/CommentController');
  return new CommentController(log, commentRepository);
});

module.exports = serviceLocator;
