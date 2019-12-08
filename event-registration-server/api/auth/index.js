const router = require('express').Router();
const controller = require('./auth.controller');

router.post('/sign-in', controller.authenticate);
router.post('/isAuthenticated', controller.isAuthenticated);

module.exports = router;
