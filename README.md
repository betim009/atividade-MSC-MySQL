# Atividades para praticar Arquitetura MSC + Express + MySQL
**Arquitetura Models, Services e Controllers**. Este repositório tem o objetivo de ajudar desenvolvedores a praticar os conceitos da arquitetura MSC.

## Visão geral
Este repositório contém dois projetos com estrutura pronta e funções vazias, para que o desenvolvedor implemente a lógica e pratique o MSC.

- Projeto 1: bicicletas (ciclistas e bicicletas)
- Projeto 2: hospital (pacientes e médicos)

## Estrutura comum
Cada projeto possui:
- `app.js` e `server.js`
- `src/models`, `src/services`, `src/controllers`, `src/routes`, `src/database`
- `src/database/migrations.sql` e `src/database/seeders.sql`

## Como iniciar (Projeto 1 ou Projeto 2)
1. Entre na pasta do projeto:
   - `cd projeto_1` ou `cd projeto_2`
2. Instale as dependências:
   - `npm install`
3. Instale o nodemon (opcional):
   - `npm install --save-dev nodemon`
4. Adicione o script no `package.json`:
   - `"dev": "nodemon app.js"`
5. Inicie a aplicação:
   - `npm run dev`

## Banco de dados
As migrations e seeders já estão prontas em cada projeto:
- `src/database/migrations.sql`
- `src/database/seeders.sql`

Execute as migrations e seeders no seu MySQL para criar e popular o banco:
1. Abra o arquivo `migrations.sql` e execute no MySQL.
2. Abra o arquivo `seeders.sql` e execute no MySQL.

## Variáveis de ambiente
Cada projeto possui um arquivo `.env` com configurações básicas:
- Projeto 1 usa `PORT=3000` e `DB_NAME=bicicletas_db`
- Projeto 2 usa `PORT=3001` e `DB_NAME=hospital_db`

## Endpoints disponíveis
### Projeto 1 (bicicletas)
- `GET /ciclistas`
- `GET /ciclistas/:id`
- `POST /ciclistas`
- `PUT /ciclistas/:id`
- `DELETE /ciclistas/:id`
- `GET /bicicletas`
- `GET /bicicletas/:id`
- `POST /bicicletas`
- `PUT /bicicletas/:id`
- `DELETE /bicicletas/:id`

### Projeto 2 (hospital)
- `GET /pacientes`
- `GET /pacientes/:id`
- `POST /pacientes`
- `PUT /pacientes/:id`
- `DELETE /pacientes/:id`
- `GET /medicos`
- `GET /medicos/:id`
- `POST /medicos`
- `PUT /medicos/:id`
- `DELETE /medicos/:id`

## Objetivo dos exercícios
As camadas de `models`, `services` e `controllers` contêm funções vazias com comentários explicando o que deve ser feito. O objetivo é implementar essas funções e completar o fluxo MSC.
