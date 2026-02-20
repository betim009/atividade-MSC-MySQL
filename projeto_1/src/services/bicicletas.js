const bicicletasModel = require('../models/bicicletas');

async function getAll() {
  return bicicletasModel.getAll();
}

async function getById(id) {
  return bicicletasModel.getById(id);
}

async function create(bicicleta) {
  return bicicletasModel.create(bicicleta);
}

async function update(id, bicicleta) {
  return bicicletasModel.update(id, bicicleta);
}

async function remove(id) {
  return bicicletasModel.remove(id);
}

async function getByMarca(marca) {
  return bicicletasModel.getByMarca(marca);
}

async function getByCiclistaId(ciclistaId) {
  return bicicletasModel.getByCiclistaId(ciclistaId);
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
