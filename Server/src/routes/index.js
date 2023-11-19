const express = require('express');
const Router = express.Router();

const getCharById = require('../Controllers/getCharById');
const { postUser } = require('../Controllers/postUser');
const { login } = require('../Controllers/login');
const { deleteFav } = require('../Controllers/deleteFav');
const { postFav } = require('../Controllers/postFav');

Router.get('/character/:id', getCharById);
Router.get('/login', login);
Router.post('/login', postUser);
Router.post('/fav', postFav);
Router.delete('/fav/:id', deleteFav);

module.exports = Router;
