const express = require('express');

const rootRouter = express.Router();

const auth = require('./auth');

rootRouter.use('/', auth);

module.exports = rootRouter;
