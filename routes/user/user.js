const express = require('express');

const router = express.Router();

const usersController = require('../../controller/user');

router.get('/', usersController.getHome);

module.exports = router;