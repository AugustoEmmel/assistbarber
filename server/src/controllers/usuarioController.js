import Usuario from '../models/usuario';

const tratarErros = (err) =>{
  let errors = {email:'', senha:'', telefone:''};

  // erro email duplicado
  if (err.code === 11000) {
    errors.email = 'Esse email já está sendo usado.';
    errors.telefone = 'Esse telefone já está sendo usado.';
    return errors;
  }

  // erro de validação
  if (err.message.includes('Usuario validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
}

//Cria o usuário
export const cadastrar = async (req, res) =>{
  const {nome, email, senha, cpf, telefone, cargo} = req.body;
  try{
    const usuario = await Usuario.create({nome, email, senha, cpf, telefone, cargo});
    res.status(201).json(usuario);
  }catch(err){
    const errors = tratarErros(err);
    res.status(400).json({errors});
  }
}

//Submete o login ao banca para comparar
export const login = async (req, res) =>{
  res.send('login');
}

export const getUsuarios = async (req, res) => {
  Usuario.find(function (err, usuarios) {
    if (err) return next(err);
    res.json(usuarios);
  });
}