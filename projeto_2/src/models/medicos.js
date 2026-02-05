const connection = require('./connection');

async function getAll() {
  // Buscar todos os medicos no banco de dados.
  // Monte um SELECT simples sem WHERE para retornar todos os registros.
}

async function getById(id) {
  // Buscar um medico pelo ID.
  // Use o parametro id para montar um SELECT com WHERE id = ?.
}

async function create(medico) {
  // Inserir um novo medico e retornar o resultado.
  // Monte um INSERT usando os dados de medico e retorne o insertId.
}

async function update(id, medico) {
  // Atualizar os dados de um medico existente.
  // Use id no WHERE e os campos de medico no SET do UPDATE.
}

async function remove(id) {
  // Remover um medico pelo ID.
  // Monte um DELETE com WHERE id = ? e retorne o resultado.
}

async function getByCrm(crm) {
  // Buscar medico pelo CRM (usado em validações).
  // Use crm para montar um SELECT com WHERE crm = ?.
}

async function getByEspecialidade(especialidade) {
  // Buscar medicos pela especialidade.
  // Use especialidade para montar um SELECT com WHERE especialidade = ?.
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
