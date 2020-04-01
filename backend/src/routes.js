const express = require('express');

const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/find', UserController.index);
routes.post('/create', UserController.create);
routes.put('/update', UserController.update);
routes.delete('/delete/:id', UserController.delete);

module.exports = routes;