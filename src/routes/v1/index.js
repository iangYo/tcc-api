const router = require('express').Router();

router.use('/auth', require('./auth'));
router.use('/testimonials', require('./testimonials'));

module.exports = router;
