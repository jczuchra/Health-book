const Sequelize = require('sequelize');

if (process.env.DATABAS_URL) {
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres',
        protocol: 'postgres',
        dialectOptions: {
            ssl: true
        }
    });
}
else {
    sequelize = new Sequelize('jczuchr1', 'jczuchr1', 'omCBheoJRPhqhhaC', {
        dialect: 'mysql',
        host: 'mysql.agh.edu.pl',
        port: '3306'
    });
}


module.exports = sequelize;