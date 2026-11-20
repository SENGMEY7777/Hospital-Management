const express = require('express');
const router = express.Router();
const laboratory.Controller = require('../controllers/laboratory.Controller');

router.get('/', laboratory.Controller.getAll);
router.get('/:id', laboratory.Controller.getById);
router.post('/', laboratory.Controller.create);
router.put('/:id', laboratory.Controller.update);
router.delete('/:id', laboratory.Controller.delete);

module.exports = router;
