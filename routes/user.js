const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post('/register', userController.registerUser);
router.get('/allUser', userController.getAllUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
