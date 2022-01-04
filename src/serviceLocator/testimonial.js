const serviceLocator = require('./register');

serviceLocator.register('testimonialRepository', () => {
  const mongoose = serviceLocator.get('mongoose');
  const TestimonialRepository = require('../repositories/TestimonialRepository');
  return new TestimonialRepository(mongoose);
});

serviceLocator.register('testimonialController', () => {
  const log = serviceLocator.get('logger');
  const testimonialRepository = serviceLocator.get('testimonialRepository');
  const TestimonialController = require('../controllers/TestimonialController');
  return new TestimonialController(log, testimonialRepository);
});

module.exports = serviceLocator;
