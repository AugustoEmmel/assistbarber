import jwt from 'jsonwebtoken';
import Usuario from '../models/usuario';

export const checaToken = (req, res, next) => {
  const token = req.cookies.jwt;

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, process.env.secret, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.send({autenticado: false});
        next();
      } else {
        console.log(decodedToken);
        res.send({autenticado: true});
        next();
      }
    });
  } else {
    res.send({autenticado: false});
  }
};

// check current user
/*const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, 'net ninja secret', async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let user = await User.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};*/