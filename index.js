// import loginRequest from './middlewares/requisito3';

const express = require('express');

const bodyParser = require('body-parser');

const endpoint = require('./middlewares/requisito1');
const getId = require('./middlewares/requisito2');
const loginRequest = require('./middlewares/requisito3');
const { validEmail, validPassword } = require('./middlewares/validData');
const { tokenValid, 
  nameValid, 
  talkValid,
  objectWatch,
  objectRate,
  ageValid } = require('./middlewares/requisito5');
const newUser = require('./middlewares/newUser');
const {    
  verifyToken, 
    verifyName, 
    verifyAge, 
    verifyTalk, 
    verifyWatch, 
    verifyRate,
    newEdit } = require('./middlewares/requisito6');
// declaracao de const para atribuir os metodos do express no app
const app = express();

// express Router aqui é usado para criar uma rota para a CONST APP
const rotaTalker = express.Router();
const user = express.Router();

// rotas nomeadas
app.use('/talker', rotaTalker);
app.use('/login', user);
app.use(bodyParser.json());

// declaracão da porta e do status do retorno
const HTTP_OK_STATUS = 200;
const PORT = '3000';

rotaTalker.get('/', endpoint);
rotaTalker.get('/:id', getId);
app.post('/login', validEmail, validPassword, loginRequest);
app.post('/talker', tokenValid, 
nameValid,
ageValid, 
talkValid,
objectWatch,
objectRate, 
newUser);
app.put('/talker/:id',
verifyToken, 
verifyName, 
verifyAge, 
verifyTalk, 
verifyWatch, 
verifyRate, 
newEdit);
// Esse endpoint é usado para listar a porta usada com a variavel PORT e verificar se foi conectado corretamento com o retorno do status
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});
app.listen(PORT, () => {
  console.log('Online');
});