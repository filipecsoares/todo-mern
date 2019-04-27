const express = require('express');
const routes = express.Router();

const TodoController = require('./controllers/TodoController');

routes.post('/todos', TodoController.store);
routes.get('/todos/:id', TodoController.findById);
routes.get('/todos', TodoController.findAll);

module.exports = routes;