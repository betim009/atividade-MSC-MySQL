-- Banco simples sobre bicicletas
CREATE DATABASE IF NOT EXISTS bicicletas_db;
USE bicicletas_db;

CREATE TABLE IF NOT EXISTS ciclistas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(120) UNIQUE,
  data_nascimento DATE
);

CREATE TABLE IF NOT EXISTS bicicletas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  marca VARCHAR(80) NOT NULL,
  modelo VARCHAR(80) NOT NULL,
  ano INT,
  ciclista_id INT,
  CONSTRAINT fk_bicicletas_ciclistas
    FOREIGN KEY (ciclista_id) REFERENCES ciclistas(id)
    ON DELETE SET NULL
    ON UPDATE CASCADE
);
