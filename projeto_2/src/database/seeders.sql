USE hospital_db;

INSERT INTO pacientes (nome, cpf, data_nascimento) VALUES
  ('Carla Mendes', '12345678901', '1990-07-21'),
  ('Diego Rocha', '98765432100', '1982-02-14');

INSERT INTO medicos (nome, crm, especialidade) VALUES
  ('Dra. Fernanda Alves', 'CRM-12345', 'Cardiologia'),
  ('Dr. Lucas Pereira', 'CRM-67890', 'Ortopedia');
