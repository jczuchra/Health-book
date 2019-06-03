const Sequelize = require('sequelize');

if (process.env.HEROKU_POSTGRESQL_BRONZE_URL) {
    // the application is executed on Heroku ... use the postgres database
    const sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_BRONZE_URL, {
        dialect: 'postgres',
        protocol: 'postgres',
        port: match[4],
        host: match[3],
        logging: true //false
    })
}
else {
    const sequelize = new Sequelize('jczuchr1', 'jczuchr1', 'omCBheoJRPhqhhaC', {
        dialect: 'mysql',
        host: 'mysql.agh.edu.pl',
        port: '3306'
    });
}


module.exports = sequelize;