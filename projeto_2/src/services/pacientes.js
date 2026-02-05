const pacientesModel = require('../models/pacientes');

async function getAll() {
  // Buscar todos os pacientes via model.
  // Chame pacientesModel.getAll() e retorne o resultado.
}

async function getById(id) {
  // Buscar um paciente por ID.
  // Valide o id e chame pacientesModel.getById(id).
}

async function create(paciente) {
  // Criar um novo paciente.
  // Valide os campos e chame pacientesModel.create(paciente).
}

async function update(id, paciente) {
  // Atualizar um paciente existente.
  // Valide o id e dados, depois chame pacientesModel.update(id, paciente).
}

async function remove(id) {
  // Remover um paciente.
  // Verifique se existe e chame pacientesModel.remove(id).
}

async function getByCpf(cpf) {
  // Buscar um paciente por CPF.
  // Valide o cpf e chame pacientesModel.getByCpf(cpf).
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByCpf,
};
