const express = require('express');
const router = express.Router();

const contactoController = require('../controllers/contactoController');
const personaController = require('../controllers/personaController')
const polizaController = require('../controllers/polizaController');
const telefonoController = require('../controllers/telefonoController');
const tipo_contactoController = require('../controllers/tipo_contactoController')
const tomadorController = require('../controllers/tomadorController');
const vehiculoController = require('../controllers/vehiculoController');

router.get('/contacto', contactoController.list);
router.get('/delete-contacto/:id', contactoController.delete);
router.get('/update-contacto/:id', contactoController.update);
router.post('/edit-contacto/:id', contactoController.edit);
router.post('/insert-contacto', contactoController.create);

router.get('/persona', personaController.list);
router.get('/delete-persona/:id', personaController.delete);
router.get('/update-persona/:id', personaController.update);
router.post('/edit-persona/:id', personaController.edit);
router.post('/insert-persona', personaController.create);

router.get('/poliza', polizaController.list);
router.get('/delete-poliza/:id', polizaController.delete);
router.get('/update-poliza/:id', polizaController.update);
router.post('/edit-poliza/:id', polizaController.edit);
router.post('/insert-poliza', polizaController.create);

router.get('/telefono', telefonoController.list);
router.get('/delete-telefono/:id', telefonoController.delete);
router.get('/update-telefono/:id', telefonoController.update);
router.post('/edit-telefono/:id', telefonoController.edit);
router.post('/insert-telefono', telefonoController.create);

router.get('/tipo_contacto', tipo_contactoController.list);
router.get('/delete-tipo_contacto/:id', tipo_contactoController.delete);
router.get('/update-tipo_contacto/:id', tipo_contactoController.update);
router.post('/edit-tipo_contacto/:id', tipo_contactoController.edit);
router.post('/insert-tipo_contacto', tipo_contactoController.create);

router.get('/tomador', tomadorController.list);
router.get('/delete-tomador/:id', tomadorController.delete);
router.get('/update-tomador/:id', tomadorController.update);
router.post('/edit-tomador/:id', tomadorController.edit);
router.post('/insert-tomador', tomadorController.create);

router.get('/vehiculo', vehiculoController.list);
router.get('/delete-vehiculo/:id', vehiculoController.delete);
router.get('/update-vehiculo/:id', vehiculoController.update);
router.post('/edit-vehiculo/:id', vehiculoController.edit);
router.post('/insert-vehiculo', vehiculoController.create);

module.exports = router;