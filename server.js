// const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

// const errorController = require('./controllers/error');
const sequelize = require('./util/database');

//Users stuff
const User = require('./model/user');
const UserLogin = require('./model/userLogin');
const Visit = require('./model/visit');

//Doctors stuff
const DoctorsDictionary = require('./model/doctorsDictionary');
const SpecializationsDictionary = require('./model/specializationsDictionary');
const Specializations = require('./model/specializations');

//Drugs stuff
const PrescribedDrugs = require('./model/prescribedDrugs');
const DrugsDictionary = require('./model/drugsDictionary');

const app = express();

// app.set('view engine', 'ejs');
// app.set('views', 'views');

// const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user/user');

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/admin', adminRoutes);
app.use(userRoutes);

// app.use(errorController.get404);

// Visit-User relations
Visit.belongsTo(User, { foreignKey: 'User_idU' });
User.hasMany(Visit, { foreignKey: 'User_idU' });
UserLogin.belongsTo(User, { foreignKey: 'User_idU' });
User.hasMany(UserLogin, { foreignKey: 'User_idU' });

// Visit-Doctor relations
Visit.belongsTo(DoctorsDictionary, { foreignKey: 'DoctorsDict_idDD' });
DoctorsDictionary.hasMany(Visit, { foreignKey: 'DoctorsDict_idDD' });
Specializations.belongsTo(SpecializationsDictionary, { foreignKey: 'specDict_idSD' });
SpecializationsDictionary.hasMany(Specializations, { foreignKey: 'specDict_idSD' });

//User-Drugs relations
PrescribedDrugs.belongsTo(Visit, { foreignKey: 'Visit_idV' });
Visit.hasMany(PrescribedDrugs, { foreignKey: 'Visit_idV' });
PrescribedDrugs.belongsTo(DrugsDictionary, { foreignKey: 'DrugsDictionary_idDsD' });

sequelize
    .sync({ force: true })
    .then(result => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    })

