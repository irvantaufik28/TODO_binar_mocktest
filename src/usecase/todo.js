class TodoUseCase {
  constructor(todoRepo, userRepo) {
    this.todoRepo = todoRepo;
    this.userRepo = userRepo;
  }

  async getAllTodoByUserId(userId) {
    let result = {
      isSuccess: true,
      statusCode: 200,
      reason: null,
      data: [],
    };

    const todo = await this.todoRepo.getAllTodoByUserId(userId);
    result.data = todo;
    return result;
  }

  async getAllUnfinishedTodByUserId(userId) {
    let result = {
      isSuccess: true,
      statusCode: 200,
      reason: null,
      data: [],
    };

    const todo = await this.todoRepo.getAllUnfinishedTodByUserId(userId);
    result.data = todo;
    return result;
  }

  async getTodoById(userId, id) {
    let result = {
      isSuccess: false,
      statusCode: 404,
      reason: null,
      data: null,
    };

    const todo = await this.todoRepo.getTodoById(id);
    if (todo.userId !== userId) {
      result.reason = 'todo not found';
      return result;
    }
    result.data = todo;
    result.isSuccess = true;
    result.statusCode = 200;
    return result;
  }

  async createTodo(data) {
    let result = {
      isSuccess: true,
      statusCode: 200,
      reason: null,
      data: null,
    };

    const todo = await this.todoRepo.createTodo(data);
    result.data = todo;
    return result;
  }

  async updateTodo(data, id) {
    let result = {
      isSuccess: false,
      statusCode: 404,
      reason: null,
      data: null,
    };

    const verifyTodo = await this.todoRepo.getTodoById(id);
    if (verifyTodo.userId !== data.userId) {
      result.reason = 'todo not found';
      return result;
    }
    await this.todoRepo.updateTodo(data, id);
    const getTodo = await this.todoRepo.getTodoById(id);
    result.isSuccess = true;
    result.statusCode = 200;
    result.data = getTodo;
    return result;
  }

  async deleteTodo(data) {
    let result = {
      isSuccess: false,
      statusCode: 404,
      reason: null,
      data: null,
    };

    const verifyTodo = await this.todoRepo.getTodoById(data.id);
    if (verifyTodo.userId !== data.userId) {
      result.reason = 'todo not found';
      return result;
    }
    await this.todoRepo.deleteTodo(data.id);
    result.isSuccess = true;
    result.statusCode = 200;
    return result;
  }
}

module.exports = TodoUseCase;
