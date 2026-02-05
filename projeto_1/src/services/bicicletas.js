const bicicletasModel = require('../models/bicicletas');

async function getAll() {
  // Buscar todas as bicicletas via model.
  // Chame bicicletasModel.getAll() e retorne o resultado.
}

async function getById(id) {
  // Buscar uma bicicleta por ID.
  // Valide o id e chame bicicletasModel.getById(id).
}

async function create(bicicleta) {
  // Criar uma nova bicicleta.
  // Valide os campos e chame bicicletasModel.create(bicicleta).
}

async function update(id, bicicleta) {
  // Atualizar uma bicicleta existente.
  // Valide o id e dados, depois chame bicicletasModel.update(id, bicicleta).
}

async function remove(id) {
  // Remover uma bicicleta.
  // Verifique se existe e chame bicicletasModel.remove(id).
}

async function getByMarca(marca) {
  // Buscar bicicletas por marca.
  // Valide a marca e chame bicicletasModel.getByMarca(marca).
}

async function getByCiclistaId(ciclistaId) {
  // Buscar bicicletas por ciclista.
  // Valide o ciclistaId e chame bicicletasModel.getByCiclistaId(ciclistaId).
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
