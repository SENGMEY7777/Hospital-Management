const express = require('express');
const router = express.Router();
const patient.Controller = require('../controllers/patient.Controller');

router.get('/', patient.Controller.getAll);
router.get('/:id', patient.Controller.getById);
router.post('/', patient.Controller.create);
router.put('/:id', patient.Controller.update);
router.delete('/:id', patient.Controller.delete);

module.exports = router;
