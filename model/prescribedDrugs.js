const Sequelize = require('sequelize');

const sequelize = require('../util/db/database');

const prescribedDrugs = sequelize.define('prescribedDrugs', {
    idPD: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    EAN: Sequelize.STRING,
}, {
    timestamps: false
})

module.exports = prescribedDrugs;