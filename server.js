const path = require('path');

const passwordHash = require('password-hash');
const User = require('./model/user');

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const CookieParser = require('cookie-parser');

const isAdmin = require('./middleware/isAdmin');

const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./util/db/database');
require('./util/db/relations');


const sharedRoutes = require('./routes/shared');
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');
const r404 = require('./routes/404');

const app = express();

app.use(session({
    secret: 'systemy-informatyczne',
    store: new SequelizeStore({
        db: sequelize
    }),
    resave: false,
    proxy: true
}))

app.use(bodyParser.urlencoded({
    extended: false
}));

// app.get('/', (req, res, next) => {
//     console.log('Halo halo');
//     if (!req.session.isLoggedIn)
//         res.redirect('/login');
//     next();
// })

app.use(express.static(path.join(__dirname, 'public')));

app.use(sharedRoutes);

app.use(userRoutes);

app.use('/admin', isAdmin, adminRoutes);

app.use(r404);


sequelize
    .sync({ force: true })
    .then(result => {
        User.find({
            where: {
                email: 'admin@admin.com'
            }
        }).then(user => {
            if (!user)
                User.create({ name: 'admin', surname: 'admin', email: 'admin@admin.com', password: passwordHash.generate('admin'), admin: 1 });
        })
        app.listen(process.env.PORT || 3000);
    })
    .catch(err => {
        console.log(err);
    })