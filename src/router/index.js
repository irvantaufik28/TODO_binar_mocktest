const express = require('express');

const rootRouter = express.Router();

const auth = require('./auth');
const todo = require('./todo');

rootRouter.use('/', auth);
rootRouter.use('/', todo);

module.exports = rootRouter;
