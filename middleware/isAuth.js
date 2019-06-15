module.exports = (req, res, next) => {
    console.log('SESJA', req.session);
    if (req.session && !req.session.isLoggedIn)
        return res.redirect('/login');
    next();
}