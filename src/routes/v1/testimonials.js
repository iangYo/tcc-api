const router = require('express').Router();

const serviceLocator = require('../../serviceLocator/register');
const validator = require('../../middleware/validator');
const validateToken = require('../../middleware/token');
const testimonial = require('../../validations/testimonial');

router.get('/', validateToken, (req, res) => {
  serviceLocator.get('testimonialController').index(req, res);
});

router.get('/:id', validateToken, (req, res) => {
  serviceLocator.get('testimonialController').show(req, res);
});

router.get('/user/:id', validateToken, (req, res) => {
  serviceLocator.get('testimonialController').allByUser(req, res);
});

router.post('/', validateToken, validator(testimonial.create), (req, res) => {
  serviceLocator.get('testimonialController').create(req, res);
});

module.exports = router;
