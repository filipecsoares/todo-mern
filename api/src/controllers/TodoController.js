const Todo = require('../models/Todo');

class TodoController {
    async store(req, res) {
        const todo = await Todo.create(req.body);
        return res.json(todo);
    }

    async findById(req, res) {
        const todo = await Todo.findById(req.params.id);
        return res.json(todo);
    }

    async findAll(req, res) {
        const todo = await Todo.find();
        return res.json(todo);
    }
}

module.exports = new TodoController();