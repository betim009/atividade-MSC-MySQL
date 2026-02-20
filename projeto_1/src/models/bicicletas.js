const connection = require('./connection');

async function getAll() {
  const [rows] = await connection.execute('SELECT * FROM bicicletas');
  return rows;
}

async function getById(id) {
  const [rows] = await connection.execute(
    'SELECT * FROM bicicletas WHERE id = ?',
    [id]
  );
  return rows[0];
}

async function create(bicicleta) {
  const { marca, modelo, ano, ciclista_id } = bicicleta;
  const [result] = await connection.execute(
    'INSERT INTO bicicletas (marca, modelo, ano, ciclista_id) VALUES (?, ?, ?, ?)',
    [marca, modelo, ano, ciclista_id]
  );
  return { id: result.insertId, ...bicicleta };
}

async function update(id, bicicleta) {
  const { marca, modelo, ano, ciclista_id } = bicicleta;
  const [result] = await connection.execute(
    'UPDATE bicicletas SET marca = ?, modelo = ?, ano = ?, ciclista_id = ? WHERE id = ?',
    [marca, modelo, ano, ciclista_id, id]
  );
  return result;
}

async function remove(id) {
  const [result] = await connection.execute(
    'DELETE FROM bicicletas WHERE id = ?',
    [id]
  );
  return result;
}

async function getByMarca(marca) {
  const [rows] = await connection.execute(
    'SELECT * FROM bicicletas WHERE marca = ?',
    [marca]
  );
  return rows;
}

async function getByCiclistaId(ciclistaId) {
  const [rows] = await connection.execute(
    'SELECT * FROM bicicletas WHERE ciclista_id = ?',
    [ciclistaId]
  );
  return rows;
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
