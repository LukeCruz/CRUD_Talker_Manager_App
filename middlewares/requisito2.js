// import express from 'express';
const express = require('express');
// import getTalkers from '../getTalkers';
const getTalkers = require('../getTalkers');

const app = express();
const HTTP_OK_STATUS = 200;

app.use(express.json());

// .GET busca dados de Id, aqui foi usado para buscar dados no arquivo getTalkers a partir de Talker.json(onde estao os dados) 
function getId(req, res) {
    const { id } = req.params;
    const talkers = getTalkers();
    const talker = talkers.find((element) => element.id === Number(id));
  
    if (!talker) {
      res.status(404);
      res.send({ message: 'Pessoa palestrante não encontrada' });
    }
    return res.status(HTTP_OK_STATUS).json(talker);
  }

  module.exports = getId;