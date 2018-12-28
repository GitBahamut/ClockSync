'use strict'
const express = require('express');
const app = express();

let timer = 0;
setInterval(function(){ timer+=0.05; }, 50);

app.use('/', express.static('webpages', { extensions: ['html'] }));

app.get('/api/sync', getData);

async function getData(req, res){
  res.json(timer);
}

app.listen(8080);
