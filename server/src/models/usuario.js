const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');

const usuarioSchema = new Schema({
    nome:{
        type: String,
        required: [true, 'Por favor entre seu nome.']
    },
    email:{
        type: String,
        required: [true, 'Por favor entre seu email.'],
        unique: true,
        validate: [isEmail, 'Por favor entre com um email válido.']
    },
    senha:{
        type: String,
        required: [true, 'Por favor entre uma senha.'],
        minlength: [6, 'Senha curta, entre pelo menos 6 caracteres.']
    },
    telefone:{
        type: String,
        required: [true, 'Por favor entre um numero telefônico.'],
        unique: true
    },
    localizacao:{
        type: String
    },
    barbeiro: {
        type: Boolean,
        required: true
    }
}, {timestamps: true});

//crypt da senha
usuarioSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.senha = await bcrypt.hash(this.senha, salt);
    next();
});

const Usuario = mongoose.model('Usuario', usuarioSchema);
module.exports = Usuario;