const router = require('express').Router();

const serviceLocator = require('../../serviceLocator/register');
const validator = require('../../middleware/validator');
const userSchema = require('../../validations/user');

router.post('/login', validator(userSchema.login), (req, res, next) => {
  serviceLocator.get('authController').login(req, res, next);
});

router.post('/store', validator(userSchema.create), (req, res, next) => {
  serviceLocator.get('authController').create(req, res, next);
});

module.exports = router;
