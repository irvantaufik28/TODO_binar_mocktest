class TodoUseCase {
  constructor(todoRepo, userRepo) {
    this.todoRepo = todoRepo;
    this.userRepo = userRepo;
  }
}

module.exports = TodoUseCase;
