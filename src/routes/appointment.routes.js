const express = require('express');
const router = express.Router();
const appointment.Controller = require('../controllers/appointment.Controller');

router.get('/', appointment.Controller.getAll);
router.get('/:id', appointment.Controller.getById);
router.post('/', appointment.Controller.create);
router.put('/:id', appointment.Controller.update);
router.delete('/:id', appointment.Controller.delete);

module.exports = router;
