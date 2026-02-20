const ciclistasService = require('../services/ciclistas');

async function getAll(req, res) {
  const ciclistas = await ciclistasService.getAll();
  return res.status(200).json(ciclistas);
}

async function getById(req, res) {
  const { id } = req.params;
  if (!id || Number.isNaN(Number(id))) {
    return res.status(400).json({ message: 'Id invalido' });
  }
  const ciclista = await ciclistasService.getById(id);

  if (!ciclista) {
    return res.status(404).json({ message: 'Ciclista nao encontrado' });
  }

  return res.status(200).json(ciclista);
}

async function create(req, res) {
  const { nome, email, data_nascimento } = req.body;
  if (!nome || !email || !data_nascimento) {
    return res.status(400).json({ message: 'Campos obrigatorios: nome, email, data_nascimento' });
  }
  const ciclista = await ciclistasService.create(req.body);
  return res.status(201).json(ciclista);
}

async function update(req, res) {
  const { id } = req.params;
  if (!id || Number.isNaN(Number(id))) {
    return res.status(400).json({ message: 'Id invalido' });
  }
  const { nome, email, data_nascimento } = req.body;
  if (!nome || !email || !data_nascimento) {
    return res.status(400).json({ message: 'Campos obrigatorios: nome, email, data_nascimento' });
  }
  const result = await ciclistasService.update(id, req.body);

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: 'Ciclista nao encontrado' });
  }

  return res.status(200).json({ id: Number(id), ...req.body });
}

async function remove(req, res) {
  const { id } = req.params;
  if (!id || Number.isNaN(Number(id))) {
    return res.status(400).json({ message: 'Id invalido' });
  }
  const result = await ciclistasService.remove(id);

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: 'Ciclista nao encontrado' });
  }

  return res.status(204).end();
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
