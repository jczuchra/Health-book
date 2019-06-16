const express = require('express');

const router = express.Router();

const adminController = require('../controller/admin');

const isAuth = require('../middleware/isAuth');

router.get('/', isAuth, adminController.getAdminHome);

router.get('/add-doctor', isAuth, adminController.getAddDoctor);

router.post('/add-doctor', isAuth, adminController.postAddDoctor);

router.get('/doctors', isAuth, adminController.getDoctors);

router.post('/doctors', isAuth, adminController.postDoctors);

router.get('/diagnostic', isAuth, adminController.getDiagnostic);

router.post('/diagnostic', isAuth, adminController.postDiagnostic);

router.get('/add-diagnostic', isAuth, adminController.getAddDiagnostic);

router.post('/add-diagnostic', isAuth, adminController.postAddDiagnostic);

router.get('/diagnostic-edit', isAuth, adminController.getEditDiagnostic);

router.post('/diagnostic-edit', isAuth, adminController.postEditDiagnostic);

router.get('/doctor-edit', isAuth, adminController.getDoctorEdit);

router.post('/doctor-edit', isAuth, adminController.postDoctorEdit);

router.get('/drugs', isAuth, adminController.getDrugs);

router.post('/drugs', isAuth, adminController.postDrugs);

router.get('/add-drug', isAuth, adminController.getAddDrug);

router.post('/add-drug', isAuth, adminController.postAddDrug);

router.get('/drug-edit', isAuth, adminController.getEditDrug);

router.post('/drug-edit', isAuth, adminController.postEditDrug);

module.exports = router;