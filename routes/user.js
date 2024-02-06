const express = require('express');
const router = express.Router();
const userController = require('../controller/userContoller');

router.post('/register', userController.registerUser);

module.exports = router;
