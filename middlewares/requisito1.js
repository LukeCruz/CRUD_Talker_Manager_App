const express = require('express');
// const express = require('express');

const getTalkers = require('../getTalkers');
// import getTalkers from '../getTalkers';

const app = express();
const HTTP_OK_STATUS = 200;

app.use(express.json());

function endpoint(_req, res) {
    const talkers = getTalkers();
  
      if (!talkers) {
        res.status(HTTP_OK_STATUS);
        res.send([]);
      } else {
        res.status(HTTP_OK_STATUS);
        res.send(talkers);
      }
    }

module.exports = endpoint;