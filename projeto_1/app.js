const express = require('express');
const routes = require('./src/routes');

const app = express();

app.use(express.json());

app.get('/health', (_req, res) => res.status(200).json({ status: 'ok' }));
app.use(routes);

module.exports = app;
