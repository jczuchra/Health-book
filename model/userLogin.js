const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const userLogin = sequelize.define('userLogin', {
    idUL: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    login: Sequelize.STRING,
    when: Sequelize.DATE,
    // User_idU: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //         model: 'users',
    //         id: 'idU'
    //     }
    // }
}, { timestamps: false })

module.exports = userLogin;