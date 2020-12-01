const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servicoSchema = new Schema({
    nome:{
        type: String,
        required: [true, 'Insira o nome do serviço.']
    },
    descricao:{
        type: String,
        required: [true, 'Insira a descrição do serviço']
    },
    preco:{
        type: Number,
        required: [true, 'Insira o preço do serviço.']
    },
    email:{
        type: Number,
        required: [true]
    }
}, {timestamps: true});

const Servico =  mongoose.model('Servico', servicoSchema);
module.exports = Servico;