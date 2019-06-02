const Sequelize = require('sequelize');

const sequelize = require('../util/db/database');

const DoctorsDictionary = sequelize.define('doctorsDictionaries', {
    idDD: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: Sequelize.STRING,
    surname: Sequelize.STRING,
    phone: Sequelize.STRING,
    email: Sequelize.STRING,
    NPWZ: Sequelize.STRING
}, {
    timestamps: false
})

module.exports = DoctorsDictionary;