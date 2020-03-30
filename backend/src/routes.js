const express = require('express');

const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/find', UserController.index);
routes.post('/create', UserController.create);
routes.post('/update', UserController.update);
routes.delete('/delete', UserController.delete);

module.exports = routes;