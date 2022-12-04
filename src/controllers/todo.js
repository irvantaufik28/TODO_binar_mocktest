const resData = require('../helper/response');

module.exports = {
  createTodo: async (req, res, next) => {
    try {
      /*
      #swagger.tags = ['TODO']
    */
      const todo = {
        title: req.body.title,
        finished: false,
        userId: req.user.id,
      };

      const result = await req.todoUC.createTodo(todo);

      if (!result.isSuccess) {
        return res.status(result.statusCode).json(resData.failed(result.reason));
      }

      res.status(result.statusCode).json(resData.success(result.data));
    } catch (error) {
      next(error);
    }
  },
  getAllTodoByUserId: async (req, res, next) => {
    /*
      #swagger.tags = ['TODO']
    */
    try {
      const userId = req.user.id;

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
    /*
      #swagger.tags = ['TODO']
    */
    try {
      const userId = req.user.id;

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
    /*
      #swagger.tags = ['TODO']
    */
    try {
      const userId = req.user.id;
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
    /*
      #swagger.tags = ['TODO']
    */
    try {
      const todo = {
        title: req.body.title,
        finished: req.body.finished,
        userId: req.user.id,
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
    /*
      #swagger.tags = ['TODO']
    */
    try {
      const data = {
        userId: req.user.id,
        id: req.params.id,
      };
      const result = await req.todoUC.deleteTodo(data);

      if (!result.isSuccess) {
        return res.status(result.statusCode).json(resData.failed(result.reason));
      }

      res.status(result.statusCode).json(resData.success(result.data));
    } catch (error) {
      next(error);
    }
  },
};
