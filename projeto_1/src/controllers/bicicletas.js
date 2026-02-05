const bicicletasService = require('../services/bicicletas');

async function getAll(req, res) {
  const bicicletas = await bicicletasService.getAll();
  return res.status(200).json(bicicletas);
}

async function getById(req, res) {
  const { id } = req.params;
  if (!id || Number.isNaN(Number(id))) {
    return res.status(400).json({ message: 'Id invalido' });
  }
  const bicicleta = await bicicletasService.getById(id);

  if (!bicicleta) {
    return res.status(404).json({ message: 'Bicicleta nao encontrada' });
  }

  return res.status(200).json(bicicleta);
}

async function create(req, res) {
  const { marca, modelo, ano, ciclista_id } = req.body;
  if (!marca || !modelo || !ano) {
    return res.status(400).json({ message: 'Campos obrigatorios: marca, modelo, ano' });
  }
  if (ciclista_id !== undefined && Number.isNaN(Number(ciclista_id))) {
    return res.status(400).json({ message: 'ciclista_id invalido' });
  }
  const bicicleta = await bicicletasService.create(req.body);
  return res.status(201).json(bicicleta);
}

async function update(req, res) {
  const { id } = req.params;
  if (!id || Number.isNaN(Number(id))) {
    return res.status(400).json({ message: 'Id invalido' });
  }
  const { marca, modelo, ano, ciclista_id } = req.body;
  if (!marca || !modelo || !ano) {
    return res.status(400).json({ message: 'Campos obrigatorios: marca, modelo, ano' });
  }
  if (ciclista_id !== undefined && Number.isNaN(Number(ciclista_id))) {
    return res.status(400).json({ message: 'ciclista_id invalido' });
  }
  const result = await bicicletasService.update(id, req.body);

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: 'Bicicleta nao encontrada' });
  }

  return res.status(200).json({ id: Number(id), ...req.body });
}

async function remove(req, res) {
  const { id } = req.params;
  if (!id || Number.isNaN(Number(id))) {
    return res.status(400).json({ message: 'Id invalido' });
  }
  const result = await bicicletasService.remove(id);

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: 'Bicicleta nao encontrada' });
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
