const express = require('express');
const helmet = require('helmet');

const routerRecipes = require('./routes/routerRecipes.js');

const server = express();

server.use(express.json());
server.use(helmet());
server.use('/api/recipes/', routerRecipes);

module.exports = server;