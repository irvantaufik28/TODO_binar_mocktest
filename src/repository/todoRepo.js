const { Todo } = require('../models');

class TodoRepo {
  constructor() {
    this.TodoModel = Todo;
  }

  async createTodo(data) {
    const todo = await this.TodoModel.create(data);
    return todo;
  }

  async getAllTodoByUserId(userId) {
    const todo = await this.TodoModel.findAll({
      where: { userId },
    });
    return todo;
  }

  async getAllUnfinishedTodByUserId(userId) {
    const todo = await this.TodoModel.findAll({
      where: {
        userId,
        finished: false,
      },
    });
    return todo;
  }

  async getTodoById(id) {
    const todo = await this.TodoModel.findOne({
      where: {
        id,
      },
    });
    return todo;
  }

  async updateTodo(data, id) {
    const todo = await this.TodoModel.update(data, {
      where: { id },
    });
    return todo;
  }

  async deleteTodo(id) {
    const todo = await this.TodoModel.destroy({
      where: { id },
    });
    return todo;
  }
}

module.exports = TodoRepo;
