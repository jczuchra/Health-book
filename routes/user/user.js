const express = require('express');

const router = express.Router();

const usersController = require('../../controller/user');

router.get('/users', usersController.getProducts);

router.get('/dodaj', usersController.getDodaj);

module.exports = router;