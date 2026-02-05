const ciclistasService = require('../services/ciclistas');

async function getAll(req, res) {
  // Retornar todos os ciclistas.
  // Chame ciclistasService.getAll() e responda com status 200.
}

async function getById(req, res) {
  // Retornar um ciclista pelo ID.
  // Extraia id de req.params, chame o service e responda com status adequado.
}

async function create(req, res) {
  // Criar um novo ciclista.
  // Use req.body, chame o service e responda com status 201.
}

async function update(req, res) {
  // Atualizar um ciclista existente.
  // Extraia id de req.params e dados de req.body, chame o service.
}

async function remove(req, res) {
  // Remover um ciclista.
  // Extraia id de req.params, chame o service e responda com status 204.
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
