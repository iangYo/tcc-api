const router = require('express').Router();

router.use('/auth', require('./auth'));
router.use('/testimonials', require('./testimonials'));
router.use('/objective', require('./objective'));

router.use(require('./notFound'));

module.exports = router;
