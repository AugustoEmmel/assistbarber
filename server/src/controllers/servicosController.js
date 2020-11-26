const Servico = require('../models/servico');

const trataErros = (err) =>{
    let errors = {nome:'', descricao:'', preco:''};
    console.log(err);
    // erro de validação
    /*if (err.message.includes('Usuario validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
        errors[properties.path] = properties.message;
    });
    }
    return errors;*/
}

//pega servicos
const getServicos = (req, res) =>{}
//pega um servico
const getServico = (req, res) =>{}
//cria um servico
const setServico = (req, res) =>{
    const {nome, descricao, preco} = req.body;
  try{
    const servico = await Servico.create({nome, descricao, preco});
    res.status(201).json(servico);
  }catch(err){
    const errors = trataErros(err);
    res.status(400).json({errors});
  }
}
//atualiza um servico
const updateServico = (req, res) =>{}

module.exports = {
    getServicos,
    getServico,
    setServico,
    updateServico
}