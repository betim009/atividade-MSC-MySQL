const connection = require('./connection');

async function getAll() {
  // Buscar todas as bicicletas no banco de dados.
  // Monte um SELECT simples sem WHERE para retornar todos os registros.
}

async function getById(id) {
  // Buscar uma bicicleta pelo ID.
  // Use o parametro id para montar um SELECT com WHERE id = ?.
}

async function create(bicicleta) {
  // Inserir uma nova bicicleta e retornar o resultado.
  // Monte um INSERT usando os dados de bicicleta e retorne o insertId.
}

async function update(id, bicicleta) {
  // Atualizar os dados de uma bicicleta existente.
  // Use id no WHERE e os campos de bicicleta no SET do UPDATE.
}

async function remove(id) {
  // Remover uma bicicleta pelo ID.
  // Monte um DELETE com WHERE id = ? e retorne o resultado.
}

async function getByMarca(marca) {
  // Buscar bicicletas por marca.
  // Use marca para montar um SELECT com WHERE marca = ?.
}

async function getByCiclistaId(ciclistaId) {
  // Buscar bicicletas associadas a um ciclista.
  // Use ciclistaId para montar um SELECT com WHERE ciclista_id = ?.
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByMarca,
  getByCiclistaId,
};
