const express = require('express');
const router = express.Router();
const doctor.Controller = require('../controllers/doctor.Controller');

router.get('/', doctor.Controller.getAll);
router.get('/:id', doctor.Controller.getById);
router.post('/', doctor.Controller.create);
router.put('/:id', doctor.Controller.update);
router.delete('/:id', doctor.Controller.delete);

module.exports = router;
