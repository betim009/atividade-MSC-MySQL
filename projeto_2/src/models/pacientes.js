const connection = require('./connection');

async function getAll() {
  const [rows] = await connection.execute('SELECT * FROM pacientes');
  return rows;
}

async function getById(id) {
  const [rows] = await connection.execute(
    'SELECT * FROM pacientes WHERE id = ?',
    [id]
  );
  return rows[0];
}

async function create(paciente) {
  const { nome, cpf, data_nascimento } = paciente;
  const [result] = await connection.execute(
    'INSERT INTO pacientes (nome, cpf, data_nascimento) VALUES (?, ?, ?)',
    [nome, cpf, data_nascimento]
  );
  return { id: result.insertId, ...paciente };
}

async function update(id, paciente) {
  const { nome, cpf, data_nascimento } = paciente;
  const [result] = await connection.execute(
    'UPDATE pacientes SET nome = ?, cpf = ?, data_nascimento = ? WHERE id = ?',
    [nome, cpf, data_nascimento, id]
  );
  return result;
}

async function remove(id) {
  const [result] = await connection.execute(
    'DELETE FROM pacientes WHERE id = ?',
    [id]
  );
  return result;
}

async function getByCpf(cpf) {
  const [rows] = await connection.execute(
    'SELECT * FROM pacientes WHERE cpf = ?',
    [cpf]
  );
  return rows[0];
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByCpf,
};
