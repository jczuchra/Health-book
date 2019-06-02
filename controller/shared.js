const passwordHash = require('password-hash');

const rootDir = require('../util/path');

const User = require('../model/user');

const path = require('path');

exports.getLogin = (req, res, next) => {
    res.render(path.join('shared', 'login.pug'));
}

exports.postLogin = (req, res, next) => {
    const {
        email,
        password
    } = req.body;
    User.find({
        where: {
            email
        }
    }).then(user => {
        if (user.email === email && passwordHash.verify(password, user.password))
            console.log('Logowanie poprawne')
        else
            console.log('Logowanie niepoprawne')
    }).catch(err => {
        console.log(err);
    })
}

exports.postRegister = (req, res, next) => {
    const {
        name,
        surname,
        email,
        password
    } = req.body;
    User.find({
        where: {
            email
        }
    }).then(user => {
        if (user)
            res.render(path.join('shared', 'register.pug'), {
                userExists: true
            });
        else {
            User.create({
                name,
                surname,
                email,
                password: passwordHash.generate(password)
            });
            res.redirect('/login');
        }
    }).catch(err => {
        console.log(err);
    });
}

exports.getRegister = (req, res, next) => {
    res.render(path.join('shared', 'register.pug'), {
        userExists: false
    });
}