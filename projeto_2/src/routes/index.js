const express = require('express');
const pacientesRoutes = require('./pacientes');
const medicosRoutes = require('./medicos');

const router = express.Router();

router.use('/pacientes', pacientesRoutes);
router.use('/medicos', medicosRoutes);

module.exports = router;
