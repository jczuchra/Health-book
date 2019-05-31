const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Specializations = sequelize.define('specializations', {
    idS: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    // pole: Sequelize.STRING,
    // docDict_idDD: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //         model: 'doctorsDictionaries',
    //         id: 'idDD'
    //     }
    // },
    // specDict_idSD: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //         model: 'specializationsDictionaries',
    //         id: 'idSD'
    //     }
    // }
}, { timestamps: false })

module.exports = Specializations;