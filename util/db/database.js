const Sequelize = require('sequelize');

const sequelize = new Sequelize('jczuchr1', 'jczuchr1', 'omCBheoJRPhqhhaC', {
    dialect: 'mysql',
    host: 'mysql.agh.edu.pl',
    port: '3306'
});


module.exports = sequelize;