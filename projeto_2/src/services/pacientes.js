const pacientesModel = require('../models/pacientes');

async function getAll() {
  return pacientesModel.getAll();
}

async function getById(id) {
  return pacientesModel.getById(id);
}

async function create(paciente) {
  return pacientesModel.create(paciente);
}

async function update(id, paciente) {
  return pacientesModel.update(id, paciente);
}

async function remove(id) {
  return pacientesModel.remove(id);
}

async function getByCpf(cpf) {
  return pacientesModel.getByCpf(cpf);
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByCpf,
};
