const medicosService = require('../services/medicos');

async function getAll(req, res) {
  const medicos = await medicosService.getAll();
  return res.status(200).json(medicos);
}

async function getById(req, res) {
  const { id } = req.params;
  if (!id || Number.isNaN(Number(id))) {
    return res.status(400).json({ message: 'Id invalido' });
  }
  const medico = await medicosService.getById(id);

  if (!medico) {
    return res.status(404).json({ message: 'Medico nao encontrado' });
  }

  return res.status(200).json(medico);
}

async function create(req, res) {
  const { nome, crm, especialidade } = req.body;
  if (!nome || !crm || !especialidade) {
    return res.status(400).json({ message: 'Campos obrigatorios: nome, crm, especialidade' });
  }
  const medico = await medicosService.create(req.body);
  return res.status(201).json(medico);
}

async function update(req, res) {
  const { id } = req.params;
  if (!id || Number.isNaN(Number(id))) {
    return res.status(400).json({ message: 'Id invalido' });
  }
  const { nome, crm, especialidade } = req.body;
  if (!nome || !crm || !especialidade) {
    return res.status(400).json({ message: 'Campos obrigatorios: nome, crm, especialidade' });
  }
  const result = await medicosService.update(id, req.body);

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: 'Medico nao encontrado' });
  }

  return res.status(200).json({ id: Number(id), ...req.body });
}

async function remove(req, res) {
  const { id } = req.params;
  if (!id || Number.isNaN(Number(id))) {
    return res.status(400).json({ message: 'Id invalido' });
  }
  const result = await medicosService.remove(id);

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: 'Medico nao encontrado' });
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
