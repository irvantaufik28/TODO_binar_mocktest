const express = require('express');
const todoControllers = require('../controllers/todo');

const router = express.Router();
const { authorized } = require('../middlerware/jwt');

router.post('/todo', authorized, todoControllers.createTodo);
router.get('/todo', authorized, todoControllers.getAllTodoByUserId);
router.get('/todo/unfinished', authorized, todoControllers.getAllUnfinishedTodByUserId);
router.get('/todo/:id', authorized, todoControllers.getTodoById);
router.put('/todo/:id', authorized, todoControllers.updateTodo);
router.delete('/todo/:id', authorized, todoControllers.deleteTodo);

module.exports = router;
