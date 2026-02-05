const express = require('express');
const ciclistasController = require('../controllers/ciclistas');

const router = express.Router();

router.get('/', ciclistasController.getAll);
router.get('/:id', ciclistasController.getById);
router.post('/', ciclistasController.create);
router.put('/:id', ciclistasController.update);
router.delete('/:id', ciclistasController.remove);

module.exports = router;
