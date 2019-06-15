const express = require('express');

const sharedController = require('../controller/shared');

const router = express.Router();

router.get('/login', sharedController.getLogin);

router.post('/login', sharedController.postLogin);

router.get('/register', sharedController.getRegister);

router.post('/register', sharedController.postRegister);

router.get('/logout', sharedController.getLogout);


module.exports = router;