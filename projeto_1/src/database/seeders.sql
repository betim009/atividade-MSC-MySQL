USE bicicletas_db;

INSERT INTO ciclistas (nome, email, data_nascimento) VALUES
  ('Ana Souza', 'ana.souza@email.com', '1995-04-12'),
  ('Bruno Lima', 'bruno.lima@email.com', '1989-11-03');

INSERT INTO bicicletas (marca, modelo, ano, ciclista_id) VALUES
  ('Caloi', 'Elite', 2021, 1),
  ('Trek', 'Marlin 7', 2020, 2),
  ('Specialized', 'Rockhopper', 2022, NULL);
