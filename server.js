const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/db/database');
require('./util/db/relations');


const sharedRoutes = require('./routes/shared/shared');
const userRoutes = require('./routes/user/user');
const adminRoutes = require('./routes/admin');

const app = express();

// app.set('views', 'views');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(sharedRoutes);

app.use(userRoutes);

app.use(adminRoutes);


sequelize
    .sync()
    .then(result => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    })