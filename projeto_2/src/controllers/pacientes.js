const pacientesService = require('../services/pacientes');

async function getAll(req, res) {
  const pacientes = await pacientesService.getAll();
  return res.status(200).json(pacientes);
}

async function getById(req, res) {
  const { id } = req.params;
  if (!id || Number.isNaN(Number(id))) {
    return res.status(400).json({ message: 'Id invalido' });
  }
  const paciente = await pacientesService.getById(id);

  if (!paciente) {
    return res.status(404).json({ message: 'Paciente nao encontrado' });
  }

  return res.status(200).json(paciente);
}

async function create(req, res) {
  const { nome, cpf, data_nascimento } = req.body;
  if (!nome || !cpf || !data_nascimento) {
    return res.status(400).json({ message: 'Campos obrigatorios: nome, cpf, data_nascimento' });
  }
  const paciente = await pacientesService.create(req.body);
  return res.status(201).json(paciente);
}

async function update(req, res) {
  const { id } = req.params;
  if (!id || Number.isNaN(Number(id))) {
    return res.status(400).json({ message: 'Id invalido' });
  }
  const { nome, cpf, data_nascimento } = req.body;
  if (!nome || !cpf || !data_nascimento) {
    return res.status(400).json({ message: 'Campos obrigatorios: nome, cpf, data_nascimento' });
  }
  const result = await pacientesService.update(id, req.body);

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: 'Paciente nao encontrado' });
  }

  return res.status(200).json({ id: Number(id), ...req.body });
}

async function remove(req, res) {
  const { id } = req.params;
  if (!id || Number.isNaN(Number(id))) {
    return res.status(400).json({ message: 'Id invalido' });
  }
  const result = await pacientesService.remove(id);

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: 'Paciente nao encontrado' });
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
