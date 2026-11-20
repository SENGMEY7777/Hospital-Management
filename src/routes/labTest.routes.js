const express = require('express');
const router = express.Router();
const labTest.Controller = require('../controllers/labTest.Controller');

router.get('/', labTest.Controller.getAll);
router.get('/:id', labTest.Controller.getById);
router.post('/', labTest.Controller.create);
router.put('/:id', labTest.Controller.update);
router.delete('/:id', labTest.Controller.delete);

module.exports = router;
