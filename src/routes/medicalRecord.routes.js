const express = require('express');
const router = express.Router();
const medicalRecord.Controller = require('../controllers/medicalRecord.Controller');

router.get('/', medicalRecord.Controller.getAll);
router.get('/:id', medicalRecord.Controller.getById);
router.post('/', medicalRecord.Controller.create);
router.put('/:id', medicalRecord.Controller.update);
router.delete('/:id', medicalRecord.Controller.delete);

module.exports = router;
