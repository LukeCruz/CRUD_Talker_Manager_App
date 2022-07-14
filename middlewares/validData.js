// AQUI VALIDA OS CAMPOS DE LOGIN E PASSWORD

const HTTP_NOT_STATUS = 400;

function validEmail(req, res, next) {
    const { email } = req.body;
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (!email) {
    return res.status(HTTP_NOT_STATUS).json({ message: 'O campo "email" é obrigatório' });
    }
  if (!emailRegex.test(email)) {
    return res.status(HTTP_NOT_STATUS).json({ 
        message: 'O "email" deve ter o formato "email@email.com"' });
  }
next();
}

function validPassword(req, res, next) {
    const { password } = req.body;

if (!password) {
    return res.status(HTTP_NOT_STATUS).json({ message: 'O campo "password" é obrigatório' });
      }
if (password.length < 6) {
  return res.status(HTTP_NOT_STATUS).json(
    { message: 'O "password" deve ter pelo menos 6 caracteres' },
);
    }
next();
}

module.exports = { validEmail, validPassword };