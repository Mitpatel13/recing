const express = require('express');
const router = express.Router();
const userController = require('../controller/userContoller');

router.post('/register', userController.registerUser);
router.get('/register', userController.getAllUser);

module.exports = router;
