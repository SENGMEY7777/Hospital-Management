const express = require('express');
const router = express.Router();
const room.Controller = require('../controllers/room.Controller');

router.get('/', room.Controller.getAll);
router.get('/:id', room.Controller.getById);
router.post('/', room.Controller.create);
router.put('/:id', room.Controller.update);
router.delete('/:id', room.Controller.delete);

module.exports = router;
