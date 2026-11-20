const express = require('express');
const router = express.Router();
const medicine.Controller = require('../controllers/medicine.Controller');

router.get('/', medicine.Controller.getAll);
router.get('/:id', medicine.Controller.getById);
router.post('/', medicine.Controller.create);
router.put('/:id', medicine.Controller.update);
router.delete('/:id', medicine.Controller.delete);

module.exports = router;
