const Sequelize = require('sequelize');

const sequelize = require('../util/db/database');

const Visit = sequelize.define('visits', {
    idV: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    diagnose: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.INTEGER
    },
    // User_idU: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false,
    //     references: {
    //         model: 'users',
    //         key: 'idU'
    //     }
    // },
    // DoctorsDict_idDD: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false,
    //     references: {
    //         model: 'doctorsDictionaries',
    //         id: 'idDD'
    //     }
    // }
}, {
    timestamps: false
})

module.exports = Visit;