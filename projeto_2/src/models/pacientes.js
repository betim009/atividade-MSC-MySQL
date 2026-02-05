const connection = require('./connection');

async function getAll() {
  // Buscar todos os pacientes no banco de dados.
  // Monte um SELECT simples sem WHERE para retornar todos os registros.
}

async function getById(id) {
  // Buscar um paciente pelo ID.
  // Use o parametro id para montar um SELECT com WHERE id = ?.
}

async function create(paciente) {
  // Inserir um novo paciente e retornar o resultado.
  // Monte um INSERT usando os dados de paciente e retorne o insertId.
}

async function update(id, paciente) {
  // Atualizar os dados de um paciente existente.
  // Use id no WHERE e os campos de paciente no SET do UPDATE.
}

async function remove(id) {
  // Remover um paciente pelo ID.
  // Monte um DELETE com WHERE id = ? e retorne o resultado.
}

async function getByCpf(cpf) {
  // Buscar paciente pelo CPF (usado em validações).
  // Use cpf para montar um SELECT com WHERE cpf = ?.
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByCpf,
};
