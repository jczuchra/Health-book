const Sequelize = require('sequelize');

const sequelize = require('../util/db/database');

const DiagnosticDictionary = sequelize.define('diagnosticsDictionaries', {
    idDT: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: Sequelize.STRING,
    description: Sequelize.STRING,
},
    { timestamps: false });

module.exports = DiagnosticDictionary;