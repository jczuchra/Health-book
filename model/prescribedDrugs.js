const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const prescribedDrugs = sequelize.define('prescribedDrugs', {
    idPD: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    EAN: Sequelize.STRING,
})

module.exports = prescribedDrugs;