const express = require('express');
const router = express.Router();
const diagnosis.Controller = require('../controllers/diagnosis.Controller');

router.get('/', diagnosis.Controller.getAll);
router.get('/:id', diagnosis.Controller.getById);
router.post('/', diagnosis.Controller.create);
router.put('/:id', diagnosis.Controller.update);
router.delete('/:id', diagnosis.Controller.delete);

module.exports = router;
