const router = require('express').Router();

const serviceLocator = require('../../serviceLocator/register');
const validator = require('../../middleware/validator');
const validateToken = require('../../middleware/token');
const diary = require('../../validations/diary');

router.get('/', validateToken, (req, res) => {
  serviceLocator.get('diaryController').index(req, res);
});

router.post('/', validateToken, validator(diary.create), (req, res) => {
  serviceLocator.get('diaryController').create(req, res);
});

router.patch('/:id', validateToken, validator(diary.update), (req, res) => {
  serviceLocator.get('diaryController').update(req, res);
});

router.delete('/:id', validateToken, validator(diary.update), (req, res) => {
  serviceLocator.get('diaryController').remove(req, res);
});

module.exports = router;
