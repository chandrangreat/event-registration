const router = require('express').Router();
const controller = require('./auth.controller');

router.post('/login', controller.authenticate);
router.post('/register', controller.register)
router.post('/isAuthenticated', controller.isAuthenticated);

module.exports = router;
