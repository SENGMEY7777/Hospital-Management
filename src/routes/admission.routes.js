const express = require('express');
const router = express.Router();
const admission.Controller = require('../controllers/admission.Controller');

router.get('/', admission.Controller.getAll);
router.get('/:id', admission.Controller.getById);
router.post('/', admission.Controller.create);
router.put('/:id', admission.Controller.update);
router.delete('/:id', admission.Controller.delete);

module.exports = router;
