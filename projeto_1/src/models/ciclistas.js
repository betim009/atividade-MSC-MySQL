const connection = require('./connection');

async function getAll() {
  // Buscar todos os ciclistas no banco de dados.
  // Monte um SELECT simples sem WHERE para retornar todos os registros.
}

async function getById(id) {
  // Buscar um ciclista pelo ID.
  // Use o parametro id para montar um SELECT com WHERE id = ?.
}

async function create(ciclista) {
  // Inserir um novo ciclista e retornar o resultado.
  // Monte um INSERT usando os dados de ciclista e retorne o insertId.
}

async function update(id, ciclista) {
  // Atualizar os dados de um ciclista existente.
  // Use id no WHERE e os campos de ciclista no SET do UPDATE.
}

async function remove(id) {
  // Remover um ciclista pelo ID.
  // Monte um DELETE com WHERE id = ? e retorne o resultado.
}

async function getByEmail(email) {
  // Buscar ciclista pelo email (usado em validações).
  // Use email para montar um SELECT com WHERE email = ?.
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByEmail,
};
