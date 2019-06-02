const path = require('path');

const User = require('../model/user');


exports.getHome = (req, res, next) => {
    res.render(path.join('user', 'home.pug'));
}