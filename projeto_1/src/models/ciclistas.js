const connection = require('./connection');

async function getAll() {
  const [rows] = await connection.execute('SELECT * FROM ciclistas');
  return rows;
}

async function getById(id) {
  const [rows] = await connection.execute(
    'SELECT * FROM ciclistas WHERE id = ?',
    [id]
  );
  return rows[0];
}

async function create(ciclista) {
  const { nome, email, data_nascimento } = ciclista;
  const [result] = await connection.execute(
    'INSERT INTO ciclistas (nome, email, data_nascimento) VALUES (?, ?, ?)',
    [nome, email, data_nascimento]
  );
  return { id: result.insertId, ...ciclista };
}

async function update(id, ciclista) {
  const { nome, email, data_nascimento } = ciclista;
  const [result] = await connection.execute(
    'UPDATE ciclistas SET nome = ?, email = ?, data_nascimento = ? WHERE id = ?',
    [nome, email, data_nascimento, id]
  );
  return result;
}

async function remove(id) {
  const [result] = await connection.execute(
    'DELETE FROM ciclistas WHERE id = ?',
    [id]
  );
  return result;
}

async function getByEmail(email) {
  const [rows] = await connection.execute(
    'SELECT * FROM ciclistas WHERE email = ?',
    [email]
  );
  return rows[0];
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByEmail,
};
