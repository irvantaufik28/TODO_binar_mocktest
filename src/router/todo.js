const express = require('express');
const todoControllers = require('../controllers/todo');

const router = express.Router();

router.post('/todo', todoControllers.createTodo);
router.get('/todo', todoControllers.getAllTodoByUserId);
router.get('/todo/unfinish', todoControllers.getAllUnfinishedTodByUserId);
router.get('/todo/:id', todoControllers.getTodoById);
router.update('/todo/:id', todoControllers.updateTodo);
router.delete('/todo/:id', todoControllers.deleteTodo);

module.exports = router;
