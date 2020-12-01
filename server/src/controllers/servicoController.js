import Servico from '../models/servico'

const tratarErros = (err) =>{
  // erro de validação
  if (err.message.includes('Servico validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
}

//Post Servico
export const cadastrarServico = async (req, res) =>{
    const {nome, descricao, preco, email} = req.body;
    try{
      const servico = await Servico.create({nome, descricao, preco, email});
      res.status(201).json(servico);
    }catch(err){
      const errors = tratarErros(err);
      res.status(400).json({errors});
    }
}

//Encontrar 1 Servico
const encontrarServico = async (req, res) =>{

}
//GetServicos
export const getServicos = async (req, res) => {
    Usuario.find(function (err, usuarios) {
      if (err) return next(err);
      res.json(usuarios);
    });
  }
//PutServicos
export const atualizarServico = async (req, res) =>{
    const {nome, descricao, preco} = req.body;
    try{
      const servico = await Servico.create({nome, descricao, preco, email});
      res.status(201).json(servico);
    }catch(err){
      const errors = tratarErros(err);
      res.status(400).json({errors});
    }
}
//Delete Servicos
export const deletarServico = async (req, res) =>{

}