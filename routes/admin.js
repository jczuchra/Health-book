const express = require('express');

const router = express.Router();

const adminController = require('../controller/admin');

// router.get('/doctors', adminController.getDoctors);

router.get('/add-doctor', adminController.getAddDoctor);

router.post('/add-doctor', adminController.postAddDoctor);

router.get('/doctors', adminController.getDoctors);

router.post('/doctors', adminController.postDoctors);

router.get('/doctor-edit', adminController.getDoctorEdit);

router.post('/doctor-edit', adminController.postDoctorEdit);

router.get('/drugs', adminController.getDrugs);

router.post('/drugs', adminController.postDrugs);

router.get('/add-drug', adminController.getAddDrug);

router.post('/add-drug', adminController.postAddDrug);

router.get('/drug-edit', adminController.getEditDrug);

router.post('/drug-edit', adminController.postEditDrug);

module.exports = router;