const express = require('express');

const router = express.Router();

const usersController = require('../controller/user');

const isAuth = require('../middleware/isAuth');

router.get('/', isAuth, usersController.getHome);

router.get('/visits', isAuth, usersController.getVisits);

router.post('/visits', isAuth, usersController.postVisits);

router.get('/change-password', isAuth, usersController.getChangePassword);

router.post('/change-password', isAuth, usersController.postChangePassword);

router.get('/add-visit', isAuth, usersController.getAddVisit);

router.post('/add-visit', isAuth, usersController.postAddVisit);

module.exports = router;