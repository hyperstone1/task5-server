const Router = require('express');
const router = new Router();
const userController = require('../controller/userController');

router.post('/users', userController.getUsers);

module.exports = router;