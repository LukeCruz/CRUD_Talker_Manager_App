const fs = require('fs').promises;

const STATUS_NAME = 400;
// const STATUS_TOKEN = 401;

const verifyToken = (req, res, next) => {
    const { authorization } = req.headers;
  
    if (!authorization) {
      return res.status(401).json({ message: 'Token não encontrado' });
    } 
  
    if (authorization.length !== 16) {
      return res.status(401).json({ message: 'Token inválido' });
    }
  
    next();
  };

  const verifyName = (req, res, next) => {
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

  const verifyAge = (req, res, next) => {
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

  const verifyTalk = (req, res, next) => {
    const { talk } = req.body;
    if (!talk) {
      return res.status(STATUS_NAME).json({ message: 'O campo "talk" é obrigatório' });
    }
next();
};
const verifyWatch = (req, res, next) => {
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

    const verifyRate = (req, res, next) => {
        const { talk } = req.body;
        const rating = talk.rate;

        if (!rating) {
            return res.status(STATUS_NAME).json({ 
                message: 'O campo "rate" é obrigatório' });
          }

        if (rating <= 0 || rating > 5) {
            return res.status(STATUS_NAME).json({ 
                message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
          }
          next();
    };

    const newEdit = async (req, res) => {
        const result = await fs.readFile('./talker.json', 'utf-8');
        const { id, name, age, talk } = req.body;
        const talker = JSON.parse(result);
        talker.push({ id, name, age, talk });
        await fs.writeFile('./talker.json', JSON.stringify(talker));
        res.status(200).json({ id, name, age, talk });
      };
      
module.exports = { 
    verifyToken, 
    verifyName, 
    verifyAge, 
    verifyTalk, 
    verifyWatch, 
    verifyRate,
    newEdit };