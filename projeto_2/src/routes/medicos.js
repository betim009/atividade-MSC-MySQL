const express = require('express');
const medicosController = require('../controllers/medicos');

const router = express.Router();

router.get('/', medicosController.getAll);
router.get('/:id', medicosController.getById);
router.post('/', medicosController.create);
router.put('/:id', medicosController.update);
router.delete('/:id', medicosController.remove);

module.exports = router;
