// const token = require('./requisito3');

 const STATUS_TOKEN = 401;
 const STATUS_NAME = 400;
const tokenValid = (req, res, next) => {
    const { authorization } = req.headers;
  
    if (!authorization) {
      return res.status(STATUS_TOKEN).json({ message: 'Token não encontrado' });
    } 
  
    if (authorization.length !== 16) {
      return res.status(STATUS_TOKEN).json({ message: 'Token inválido' });
    }
  
    next();
  };

  const nameValid = (req, res, next) => {
    const { name } = req.body;
    if (!name) {
      return res.status(STATUS_NAME)
        .json({ message: 'O campo "name" é obrigatório' });
    }
    if (name.length < 3) {
      return res.status(STATUS_NAME)
        .json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
    }
    next();
  };

  const ageValid = (req, res, next) => {
    const { age } = req.body;

    if (!age) {
      return res.status(STATUS_NAME).json({ message: 'O campo "age" é obrigatório' });
    }
  
    if (Number(age) < 18) {
      return res.status(STATUS_NAME).json({ 
        message: 'A pessoa palestrante deve ser maior de idade' });
    }
  
    next();
  };

  const talkValid = (req, res, next) => {
    const { talk } = req.body;
    if (!talk) {
      return res.status(STATUS_NAME).json({ message: 'O campo "talk" é obrigatório' });
    }
next();
};
const objectWatch = (req, res, next) => {
    const { talk } = req.body;
    const date = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
    const watchedAting = talk.watchedAt;
    if (!watchedAting) {
      return res.status(STATUS_NAME).json({ message: 'O campo "watchedAt" é obrigatório' });
    }

    if (!watchedAting.match(date)) {
        return res.status(STATUS_NAME).json({ 
            message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
      }
      next();
    };

    const objectRate = (req, res, next) => {
        const { talk } = req.body;
        const rating = talk.rate;

        if (!rating) {
            return res.status(STATUS_NAME).json({ 
                message: 'O campo "rate" é obrigatório' });
          }

        if (rating < 1 || rating > 5) {
            return res.status(STATUS_NAME).json({ 
                message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
          }
          next();
    };
 // module.exports = tokenValid;
 module.exports = { tokenValid, nameValid, ageValid, talkValid, objectWatch, objectRate };