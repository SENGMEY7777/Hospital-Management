const express = require('express');
const router = express.Router();
const billing.Controller = require('../controllers/billing.Controller');

router.get('/', billing.Controller.getAll);
router.get('/:id', billing.Controller.getById);
router.post('/', billing.Controller.create);
router.put('/:id', billing.Controller.update);
router.delete('/:id', billing.Controller.delete);

module.exports = router;
