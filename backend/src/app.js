const express = require('express');
const app = express();
const router = require('./router')

app.use(express.json());
//rotas
app.use(router)


module.exports = app;
