const express = require('express');
const router = express.Router();
const prescription.Controller = require('../controllers/prescription.Controller');

router.get('/', prescription.Controller.getAll);
router.get('/:id', prescription.Controller.getById);
router.post('/', prescription.Controller.create);
router.put('/:id', prescription.Controller.update);
router.delete('/:id', prescription.Controller.delete);

module.exports = router;
