const express = require('express');
const router = express.Router();
const bed.Controller = require('../controllers/bed.Controller');

router.get('/', bed.Controller.getAll);
router.get('/:id', bed.Controller.getById);
router.post('/', bed.Controller.create);
router.put('/:id', bed.Controller.update);
router.delete('/:id', bed.Controller.delete);

module.exports = router;
