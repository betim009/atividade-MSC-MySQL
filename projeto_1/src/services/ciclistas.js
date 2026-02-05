const ciclistasModel = require('../models/ciclistas');

async function getAll() {
  return ciclistasModel.getAll();
}

async function getById(id) {
  return ciclistasModel.getById(id);
}

async function create(ciclista) {
  return ciclistasModel.create(ciclista);
}

async function update(id, ciclista) {
  return ciclistasModel.update(id, ciclista);
}

async function remove(id) {
  return ciclistasModel.remove(id);
}

async function getByEmail(email) {
  return ciclistasModel.getByEmail(email);
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByEmail,
};
