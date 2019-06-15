const express = require('express');

const router = express.Router();

const usersController = require('../controller/user');

const isAuth = require('../middleware/isAuth');

router.get('/', isAuth, usersController.getHome);

module.exports = router;