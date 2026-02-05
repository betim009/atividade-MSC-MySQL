const medicosService = require('../services/medicos');

async function getAll(req, res) {
  // Retornar todos os medicos.
  // Chame medicosService.getAll() e responda com status 200.
}

async function getById(req, res) {
  // Retornar um medico pelo ID.
  // Extraia id de req.params, chame o service e responda com status adequado.
}

async function create(req, res) {
  // Criar um novo medico.
  // Use req.body, chame o service e responda com status 201.
}

async function update(req, res) {
  // Atualizar um medico existente.
  // Extraia id de req.params e dados de req.body, chame o service.
}

async function remove(req, res) {
  // Remover um medico.
  // Extraia id de req.params, chame o service e responda com status 204.
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
