const express = require('express');

const errorController = require('../controller/404');

const router = express.Router();

router.get('/:any', errorController.get404);

module.exports = router;