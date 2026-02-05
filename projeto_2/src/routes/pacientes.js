const express = require('express');
const pacientesController = require('../controllers/pacientes');

const router = express.Router();

router.get('/', pacientesController.getAll);
router.get('/:id', pacientesController.getById);
router.post('/', pacientesController.create);
router.put('/:id', pacientesController.update);
router.delete('/:id', pacientesController.remove);

module.exports = router;
