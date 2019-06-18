const path = require('path');

const passwordHash = require('password-hash');

const User = require('../model/user');
const Doctors = require('../model/doctorsDictionary');
const Specialization = require('../model/specializations');
const SpecializationDictionary = require('../model/specializationsDictionary');
const Visit = require('../model/visit');

exports.getHome = (req, res, next) => {
    res.render(path.join('user', 'home.pug'));
}

exports.getVisits = (req, res, next) => {
    Visit.findAll({
        where: {
            userIdU: req.session.user.idU
        }
    }).then(visits => {
        res.render(path.join('user', 'visits.pug'), { visits });
    })
}

exports.postVisits = (req, res, next) => {
    Visit.findById(req.body.visitId).then(visit => {
        visit.destroy().then(result => {
            res.redirect('/visits');
        })
    })
}

exports.getAddVisit = (req, res, next) => {
    Doctors.findAll().then(doctors => {
        res.render(path.join('user', 'add-visit.pug'), { doctors })
    })
}

exports.postAddVisit = (req, res, next) => {
    const { diagnose, date, time, doctorId, status } = req.body;
    const userId = req.session.user.idU;
    Visit.create({
        diagnose,
        status,
        doctorsDictionaryIdDD: doctorId,
        userIdU: userId,
        date: (date + ',' + time)
    }).then((result) => {
        res.redirect('/visits');
    })
}

exports.getChangePassword = (req, res, next) => {
    res.render(path.join('user', 'change-password.pug'));
}

exports.postChangePassword = (req, res, next) => {
    User.findById(req.session.user.idU).then(user => {
        if (passwordHash.verify(req.body.oldPassword, user.password)) {
            user.password = passwordHash.generate(req.body.newPassword);
            user.save();
            res.render(path.join('user', 'change-password.pug'), { passwordChanged: true })
        }
        else
            res.render(path.join('user', 'change-password.pug'), { passwordWrong: true })
    })
}