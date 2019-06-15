//Doctors stuff
const SpecializationsDictionary = require('../../model/specializationsDictionary');
const Specializations = require('../../model/specializations');
const DoctorsDictionary = require('../../model/doctorsDictionary');



//Drugs stuff
const DrugsDictionary = require('../../model/drugsDictionary');
const PrescribedDrugs = require('../../model/prescribedDrugs');


//Users stuff
const UserLogin = require('../../model/userLogin');
const User = require('../../model/user');
const Visit = require('../../model/visit');

//Drugs Relations
Visit.hasMany(PrescribedDrugs);
DrugsDictionary.hasOne(PrescribedDrugs);

//User Relations
User.hasMany(Visit);
User.hasMany(UserLogin);

//Doctors Relations
DoctorsDictionary.hasMany(Visit);
DoctorsDictionary.hasOne(Specializations, {
    onDelete: 'CASCADE'
});
SpecializationsDictionary.hasOne(Specializations);