const express = require('express');
const routes = express.Router();

const TodoController = require('./controllers/TodoController');

routes.post('/todos', TodoController.store);
routes.get('/todos/:id', TodoController.findById);
routes.get('/todos', TodoController.findAll);
routes.delete('/todos/:id', TodoController.delete);
routes.put('/todos/:id', TodoController.update);

module.exports = routes;