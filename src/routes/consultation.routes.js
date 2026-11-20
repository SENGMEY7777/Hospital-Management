const express = require('express');
const router = express.Router();
const consultation.Controller = require('../controllers/consultation.Controller');

router.get('/', consultation.Controller.getAll);
router.get('/:id', consultation.Controller.getById);
router.post('/', consultation.Controller.create);
router.put('/:id', consultation.Controller.update);
router.delete('/:id', consultation.Controller.delete);

module.exports = router;
