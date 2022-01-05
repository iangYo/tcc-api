const router = require('express').Router();

const serviceLocator = require('../../serviceLocator/register');
const validator = require('../../middleware/validator');
const validateToken = require('../../middleware/token');
const testimonial = require('../../validations/testimonial');

// router.post('/login', validator(userSchema.login), (req, res, next) => {
//   serviceLocator.get('authController').login(req, res, next);
// });

router.post('/', validateToken, validator(testimonial.create), (req, res) => {
  serviceLocator.get('testimonialController').create(req, res);
});

module.exports = router;
