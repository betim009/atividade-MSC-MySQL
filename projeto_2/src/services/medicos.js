const medicosModel = require('../models/medicos');

async function getAll() {
  return medicosModel.getAll();
}

async function getById(id) {
  return medicosModel.getById(id);
}

async function create(medico) {
  return medicosModel.create(medico);
}

async function update(id, medico) {
  return medicosModel.update(id, medico);
}

async function remove(id) {
  return medicosModel.remove(id);
}

async function getByCrm(crm) {
  return medicosModel.getByCrm(crm);
}

async function getByEspecialidade(especialidade) {
  return medicosModel.getByEspecialidade(especialidade);
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByCrm,
  getByEspecialidade,
};
