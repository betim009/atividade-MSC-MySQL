const bicicletasService = require('../services/bicicletas');

async function getAll(req, res) {
  // Retornar todas as bicicletas.
  // Chame bicicletasService.getAll() e responda com status 200.
}

async function getById(req, res) {
  // Retornar uma bicicleta pelo ID.
  // Extraia id de req.params, chame o service e responda com status adequado.
}

async function create(req, res) {
  // Criar uma nova bicicleta.
  // Use req.body, chame o service e responda com status 201.
}

async function update(req, res) {
  // Atualizar uma bicicleta existente.
  // Extraia id de req.params e dados de req.body, chame o service.
}

async function remove(req, res) {
  // Remover uma bicicleta.
  // Extraia id de req.params, chame o service e responda com status 204.
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
