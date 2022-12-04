const { Todo } = require('../models/todo');

class TodoRepo {
  constructor() {
    this.todoModel = Todo;
  }

  async getAllByUserId(userId) {
    const todo = await this.todoModel.findAll({
      where: { userId },
    });
    return todo;
  }

  async getByUserId(userId) {
    const todo = await this.todoModel.findAll({
      where: { userId },
    });
    return todo;
  }
}

module.exports = TodoRepo;
