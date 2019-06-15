module.exports = (req, res, next) => {
    if (req.session && !req.session.isLoggedIn)
        res.redirect('/login');
    next();
}