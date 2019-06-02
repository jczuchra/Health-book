const path = require('path');

const Doctor = require('../model/doctorsDictionary');
const Specialization = require('../model//specializations');
const SpecializationsDictionary = require('../model/specializationsDictionary');
const Drugs = require('../model/drugsDictionary');

const createDoctor = (body, res) => {
    const {
        name,
        surname,
        email,
        phone,
        NPWZ,
        specialization
    } = body;
    Doctor.find({
        where: {
            NPWZ
        }
    }).then(doctor => {
        if (doctor)
            res.render(path.join('admin', 'add-doctor.pug'), {
                doctorExists: true
            });
        else {
            Doctor.create({
                    name,
                    surname,
                    email,
                    phone,
                    NPWZ
                })
                .then(doctor => {
                    SpecializationsDictionary.find({
                        where: {
                            specializationName: specialization
                        }
                    }).then(spec => {
                        if (spec)
                            Specialization.create({
                                doctorsDictionaryIdDD: doctor.idDD,
                                specializationsDictionaryIdSD: spec.idSD
                            })
                        else
                            SpecializationsDictionary.create({
                                specializationName: specialization
                            }).then(newSpec => {
                                Specialization.create({
                                    doctorsDictionaryIdDD: doctor.idDD,
                                    specializationsDictionaryIdSD: newSpec.idSD
                                })
                            })
                    })
                });
            res.redirect('/doctors');
        }
    })
}

const deleteDoctor = doctorId => {
    return Doctor.findById(doctorId).then(doctor => {
        doctor.destroy();
    });
}

const getEditDoctorData = (req, res) => {
    Doctor.findById(req.query.editId).then(doctor => {
        Specialization.find({
            where: {
                doctorsDictionaryIdDD: req.query.editId
            }
        }).then(spec => {
            SpecializationsDictionary.findById(spec.specializationsDictionaryIdSD).then(specName => {
                res.render(path.join('admin', 'doctor-edit.pug'), {
                    doctorExists: false,
                    doctor,
                    specialization: specName
                });
            })
        })
    })
}

const postEditDoctorData = (req, res) => {
    Doctor.findById(req.body.doctorId).then(doctor => {
        doctor.name = req.body.name;
        doctor.surname = req.body.surname;
        doctor.phone = req.body.phone;
        doctor.email = req.body.email;
        doctor.NPWZ = req.body.NPWZ;
        doctor.save()
    })
    SpecializationsDictionary.findById(req.body.specId).then(specialization => {
        specialization.specializationName = req.body.specialization;
        specialization.save();
        res.redirect('/doctors');
    })
}

exports.getDoctors = (req, res, next) => {
    Doctor.findAll().then(doctors => {
        res.render(path.join('admin', 'doctors.pug'), {
            doctors
        });
    })

}

exports.postDoctors = (req, res, next) => {
    if (req.body.doctorId)
        deleteDoctor(req.body.doctorId).then(result => {
            res.redirect('/doctors');
        })
}

exports.getAddDoctor = (req, res, next) => {
    res.render(path.join('admin', 'add-doctor.pug'), {
        doctorExists: false
    });
}

exports.postAddDoctor = (req, res, next) => {
    createDoctor(req.body, res);
}

exports.getDoctorEdit = (req, res, next) => {
    getEditDoctorData(req, res);
}

exports.postDoctorEdit = (req, res, next) => {
    postEditDoctorData(req, res);
}

exports.getDrugs = (req, res, next) => {
    Drugs.findAll().then(drugs => {
        res.render(path.join('admin', 'drugs.pug'), {
            drugs
        })
    })
}

exports.getAddDrug = (req, res, next) => {
    res.render(path.join('admin', 'add-drug.pug'));
}

exports.postAddDrug = (req, res, next) => {
    const {
        name,
        pack,
        medication,
        ean
    } = req.body;
    Drugs.create({
        name,
        pack,
        medication,
        ean
    }).then(result => {
        res.redirect('/drugs');
    })
}