// Importando modulos necessários
import './helpers/dotenv/initEnv';
import cors from 'cors'; //cors
import express from 'express'; //Express
import usuario from './routes/usuarioRotas'; //Autenticacao
import './helpers/db/mongodb'; //Banco de dados
import cookieParser from 'cookie-parser';

// Configurando portas
const port = process.env.PORT || 5000;
const app = express();
// Configurando middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// Defininindo rotas para middleware
app.use('/', usuario);
// Escutando Portas
app.listen(port);
console.log(`Escutando em http://localhost:${port}/`);

exports.default = app;
