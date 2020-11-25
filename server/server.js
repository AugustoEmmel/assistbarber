// Importando modulos necessários
const cors = require('cors');
const express = require('express');

// Parse variáveis env
require('dotenv').config();
require("./helpers/db/mongodb.js")();

// Configurando portas
const port = process.env.PORT || 9000;
const app = express();

// Configurando middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Defininindo rotas para middleware
const auth = require('./routes/auth');
app.use('/routes/auth',auth);

// Escutando Portas
app.listen(port);
console.log(`Escutando em http://localhost:${port}/`);

module.exports = app;
