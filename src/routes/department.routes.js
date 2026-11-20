const express = require('express');
const router = express.Router();
const department.Controller = require('../controllers/department.Controller');

router.get('/', department.Controller.getAll);
router.get('/:id', department.Controller.getById);
router.post('/', department.Controller.create);
router.put('/:id', department.Controller.update);
router.delete('/:id', department.Controller.delete);

module.exports = router;
