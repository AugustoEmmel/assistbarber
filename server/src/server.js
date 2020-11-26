// Importando modulos necessários
import cors from "cors"; //cors
import express from "express"; //Express
import auth from "./routes/auth.js"; //Autenticacao
import db from "./helpers/mongodb.js"; //Banco de dados

// Inicializando Banco de Dados
db;
// Configurando portas
const port = process.env.PORT || 9000;
const app = express();
// Configurando middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Defininindo rotas para middleware
app.use('/routes/auth',auth);
// Escutando Portas
app.listen(port);
console.log(`Escutando em http://localhost:${port}/`);

exports.default = app;
