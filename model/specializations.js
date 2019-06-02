const Sequelize = require('sequelize');

const sequelize = require('../util/db/database');

const Specializations = sequelize.define('specializations', {
    idS: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
}, {
    timestamps: false
})

module.exports = Specializations;