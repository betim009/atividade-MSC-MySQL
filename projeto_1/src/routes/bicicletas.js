const express = require('express');
const bicicletasController = require('../controllers/bicicletas');

const router = express.Router();

router.get('/', bicicletasController.getAll);
router.get('/:id', bicicletasController.getById);
router.post('/', bicicletasController.create);
router.put('/:id', bicicletasController.update);
router.delete('/:id', bicicletasController.remove);

module.exports = router;
