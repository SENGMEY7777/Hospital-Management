const express = require('express');
const router = express.Router();
const pharmacy.Controller = require('../controllers/pharmacy.Controller');

router.get('/', pharmacy.Controller.getAll);
router.get('/:id', pharmacy.Controller.getById);
router.post('/', pharmacy.Controller.create);
router.put('/:id', pharmacy.Controller.update);
router.delete('/:id', pharmacy.Controller.delete);

module.exports = router;
