const Sequelize = require('sequelize');

const sequelize = require('../util/db/database');

const SpecializationsDictionary = sequelize.define('specializationsDictionaries', {
    idSD: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    specializationName: Sequelize.STRING,
}, {
    timestamps: false
})

module.exports = SpecializationsDictionary;