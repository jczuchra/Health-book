const path = require('path');

exports.get404 = (req, res, next) => {
    res.render(path.join('404.pug'));
}