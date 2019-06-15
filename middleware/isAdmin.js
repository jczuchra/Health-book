module.exports = (req, res, next) => {
    if (req.session && req.session.user && !req.session.user.admin)
        res.redirect('/404')
    next();
}