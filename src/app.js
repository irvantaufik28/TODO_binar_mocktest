require('dotenv').config();

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const serverError = require('./middlerware/serverError');
const token = require('./helper/generateToken');

const app = express();

const AuthRepo = require('./repository/authRepo');
const TodoRepo = require('./repository/todoRepo');
const AuthUsecase = require('./usecase/auth');
const TOddoUsecase = require('./usecase/todo');

const rootRouter = require('./router/index');

const authUC = new AuthUsecase(new AuthRepo(), token);
const todoUC = new TOddoUsecase(new TodoRepo());

app.use((req, res, next) => {
  req.authUC = authUC;
  req.todoUC = todoUC;
  next();
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json('My TODO APP');
});

app.use('/api/v1', rootRouter);
const swaggerDocument = require('./docs/docs.json');

app.use(serverError);
app.use(
  '/docs',
  swaggerUi.serveFiles(swaggerDocument),
  swaggerUi.setup(swaggerDocument),
);

module.exports = app;
