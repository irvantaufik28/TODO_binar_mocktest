const resData = require('../helper/response');

module.exports = {
  createTodo: async (req, res, next) => {
    try {
      const todo = {
        title: req.body.title,
        finish: false,
        userId: req.user,
      };

      const result = await req.todoUC.createTODO(todo);

      if (!result.isSuccess) {
        return res.status(result.statusCode).json(resData.failed(result.reason));
      }

      res.status(result.statusCode).json(resData.success(result.data));
    } catch (error) {
      next(error);
    }
  },
  getAllTodoByUserId: async (req, res, next) => {
    try {
      const { userId } = req.user;

      const result = await req.todoUC.getAllTodoByUserId(userId);

      if (!result.isSuccess) {
        return res.status(result.statusCode).json(resData.failed(result.reason));
      }

      res.status(result.statusCode).json(resData.success(result.data));
    } catch (error) {
      next(error);
    }
  },

  getAllUnfinishedTodByUserId: async (req, res, next) => {
    try {
      const { userId } = req.user;

      const result = await req.todoUC.getAllUnfinishedTodByUserId(userId);

      if (!result.isSuccess) {
        return res.status(result.statusCode).json(resData.failed(result.reason));
      }

      res.status(result.statusCode).json(resData.success(result.data));
    } catch (error) {
      next(error);
    }
  },

  getTodoById: async (req, res, next) => {
    try {
      const { userId } = req.user;
      const { id } = req.params;

      const result = await req.todoUC.getTodoById(userId, id);

      if (!result.isSuccess) {
        return res.status(result.statusCode).json(resData.failed(result.reason));
      }

      res.status(result.statusCode).json(resData.success(result.data));
    } catch (error) {
      next(error);
    }
  },
  updateTodo: async (req, res, next) => {
    try {
      const todo = {
        title: req.body.title,
        finish: req.body.finish,
      };
      const { id } = req.params;
      const result = await req.todoUC.updateTodo(todo, id);

      if (!result.isSuccess) {
        return res.status(result.statusCode).json(resData.failed(result.reason));
      }

      res.status(result.statusCode).json(resData.success(result.data));
    } catch (error) {
      next(error);
    }
  },
  deleteTodo: async (req, res, next) => {
    try {
      const { userid } = req.user;
      const { id } = req.params;
      const result = await req.todoUC.deleteTodoo(userid, id);

      if (!result.isSuccess) {
        return res.status(result.statusCode).json(resData.failed(result.reason));
      }

      res.status(result.statusCode).json(resData.success(result.data));
    } catch (error) {
      next(error);
    }
  },
};
