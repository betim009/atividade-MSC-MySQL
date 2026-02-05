const express = require('express');
const ciclistasRoutes = require('./ciclistas');
const bicicletasRoutes = require('./bicicletas');

const router = express.Router();

router.use('/ciclistas', ciclistasRoutes);
router.use('/bicicletas', bicicletasRoutes);

module.exports = router;
