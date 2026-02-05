const ciclistasModel = require('../models/ciclistas');

async function getAll() {
  // Buscar todos os ciclistas via model.
  // Chame ciclistasModel.getAll() e retorne o resultado.
}

async function getById(id) {
  // Buscar um ciclista por ID.
  // Valide o id e chame ciclistasModel.getById(id).
}

async function create(ciclista) {
  // Criar um novo ciclista.
  // Valide os campos e chame ciclistasModel.create(ciclista).
}

async function update(id, ciclista) {
  // Atualizar um ciclista existente.
  // Valide o id e dados, depois chame ciclistasModel.update(id, ciclista).
}

async function remove(id) {
  // Remover um ciclista.
  // Verifique se existe e chame ciclistasModel.remove(id).
}

async function getByEmail(email) {
  // Buscar um ciclista por email.
  // Valide o email e chame ciclistasModel.getByEmail(email).
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByEmail,
};
