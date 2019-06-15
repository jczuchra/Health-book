const Sequelize = require('sequelize');

const sequelize = require('../util/db/database');

const User = sequelize.define('users', {
    idU: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    surname: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    admin: Sequelize.BOOLEAN,
}, {
        timestamps: false
    });

module.exports = User;