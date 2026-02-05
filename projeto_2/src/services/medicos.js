const medicosModel = require('../models/medicos');

async function getAll() {
  // Buscar todos os medicos via model.
  // Chame medicosModel.getAll() e retorne o resultado.
}

async function getById(id) {
  // Buscar um medico por ID.
  // Valide o id e chame medicosModel.getById(id).
}

async function create(medico) {
  // Criar um novo medico.
  // Valide os campos e chame medicosModel.create(medico).
}

async function update(id, medico) {
  // Atualizar um medico existente.
  // Valide o id e dados, depois chame medicosModel.update(id, medico).
}

async function remove(id) {
  // Remover um medico.
  // Verifique se existe e chame medicosModel.remove(id).
}

async function getByCrm(crm) {
  // Buscar um medico por CRM.
  // Valide o crm e chame medicosModel.getByCrm(crm).
}

async function getByEspecialidade(especialidade) {
  // Buscar medicos por especialidade.
  // Valide a especialidade e chame medicosModel.getByEspecialidade(especialidade).
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
