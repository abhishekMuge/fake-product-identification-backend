
const express = require('express');
const router = express.Router();

const { registerUser, loginUser } = require('../controller/userController');

router.post('/user/login', loginUser);
router.post('/user/register', registerUser);

module.exports = router;