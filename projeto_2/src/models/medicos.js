const connection = require('./connection');

async function getAll() {
  const [rows] = await connection.execute('SELECT * FROM medicos');
  return rows;
}

async function getById(id) {
  const [rows] = await connection.execute(
    'SELECT * FROM medicos WHERE id = ?',
    [id]
  );
  return rows[0];
}

async function create(medico) {
  const { nome, crm, especialidade } = medico;
  const [result] = await connection.execute(
    'INSERT INTO medicos (nome, crm, especialidade) VALUES (?, ?, ?)',
    [nome, crm, especialidade]
  );
  return { id: result.insertId, ...medico };
}

async function update(id, medico) {
  const { nome, crm, especialidade } = medico;
  const [result] = await connection.execute(
    'UPDATE medicos SET nome = ?, crm = ?, especialidade = ? WHERE id = ?',
    [nome, crm, especialidade, id]
  );
  return result;
}

async function remove(id) {
  const [result] = await connection.execute(
    'DELETE FROM medicos WHERE id = ?',
    [id]
  );
  return result;
}

async function getByCrm(crm) {
  const [rows] = await connection.execute(
    'SELECT * FROM medicos WHERE crm = ?',
    [crm]
  );
  return rows[0];
}

async function getByEspecialidade(especialidade) {
  const [rows] = await connection.execute(
    'SELECT * FROM medicos WHERE especialidade = ?',
    [especialidade]
  );
  return rows;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByCrm,
  getByEspecialidade,
};
