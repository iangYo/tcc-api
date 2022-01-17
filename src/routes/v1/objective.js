const router = require('express').Router();

const serviceLocator = require('../../serviceLocator/register');
const validator = require('../../middleware/validator');
const validateToken = require('../../middleware/token');
const objective = require('../../validations/objective');

router.get('/', validateToken, (req, res) => {
  serviceLocator.get('objectiveController').index(req, res);
});

router.post('/', validateToken, validator(objective.create), (req, res) => {
  serviceLocator.get('objectiveController').create(req, res);
});

router.patch('/:id', validateToken, validator(objective.update), (req, res) => {
  serviceLocator.get('objectiveController').update(req, res);
});

router.delete('/:id', validateToken, validator(objective.update), (req, res) => {
  serviceLocator.get('objectiveController').remove(req, res);
});

module.exports = router;
