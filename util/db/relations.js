//Users stuff
const User = require('../../model/user');
const UserLogin = require('../../model/userLogin');
const Visit = require('../../model/visit');

//Doctors stuff
const DoctorsDictionary = require('../../model/doctorsDictionary');
const SpecializationsDictionary = require('../../model/specializationsDictionary');
const Specializations = require('../../model/specializations');

//Drugs stuff
const PrescribedDrugs = require('../../model/prescribedDrugs');
const DrugsDictionary = require('../../model/drugsDictionary');

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