const User = require('../model/user');


exports.getProducts = (req, res, next) => {
    User
        .findAll()
        .then(users => {
            users.map(user => {
                console.log(user.title);
            })
        })
        .catch(err => {
            console.log(err);
        })

};

exports.getDodaj = (req, res, next) => {
    User.create({
        title: 'Janek',
        price: 22
    });
    console.log('dodalem');
};



