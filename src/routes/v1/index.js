const router = require('express').Router();

router.use('/auth', require('./auth'));
router.use('/testimonials', require('./testimonials'));
router.use('/comments', require('./comment'));

module.exports = router;
