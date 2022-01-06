const router = require('express').Router();

const serviceLocator = require('../../serviceLocator/register');
const validator = require('../../middleware/validator');
const validateToken = require('../../middleware/token');
const comment = require('../../validations/comment');

router.get('/', validateToken, (req, res) => {
  serviceLocator.get('commentController').index(req, res);
});

router.post('/', validateToken, validator(comment.create), (req, res) => {
  serviceLocator.get('commentController').create(req, res);
});

module.exports = router;
