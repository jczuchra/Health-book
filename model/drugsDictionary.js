const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const drugsDictionary = sequelize.define('drugsDictionary', {
    idDsD: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    EAN: Sequelize.STRING,
    name: Sequelize.STRING,
    medication: Sequelize.STRING,
    pack: Sequelize.STRING
})

module.exports = drugsDictionary;